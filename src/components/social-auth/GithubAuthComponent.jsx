import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../features/auth/authSlide";

export const useLoginWithGitHub = () => {
  const [signUpRequest] = useRegisterMutation();
  const [loginRequest] = useLoginMutation();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const provider = new GithubAuthProvider();

  // Watch for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  const gitHubLogin = async () => {
    console.log("GitHub login clicked ✅");   // <--- Add this
    setPending(true);

    try {
      // Step 1: Firebase popup login
      const res = await signInWithPopup(auth, provider);
      if (!res?.user) throw new Error("GitHub login failed");

      const user = res.user;
      console.log("✅ GitHub Info:", user);

      const password = `${user?.displayName?.substring(0, 4) || "GH"}${
        import.meta.env.VITE_SECRET_KEY
      }`;

      try {
        // Step 2: Try Register first
        await signUpRequest({
          username: "GH_" + (user?.displayName?.substring(0, 4) || "User"),
          phoneNumber: user?.phoneNumber || "",
          address: {
            addressLine1: "",
            addressLine2: "",
            road: "",
            linkAddress: "",
          },
          email: user?.email,
          password,
          confirmPassword: password,
          profile: user?.photoURL,
        }).unwrap();

        console.log("✅ Signup success with GitHub account");
      } catch (err) {
        console.log("⚠️ Signup error, trying login...", err);

        // Step 3: If already registered → login
        await loginRequest({
          email: user?.email,
          password,
        }).unwrap();

        console.log("✅ Login success with GitHub account");
      }

      setPending(false);
    } catch (err) {
      console.error("❌ GitHub Login Failed:", err);
      setError(err);
      setPending(false);
    }
  };

  const gitHubLogout = async () => {
    setPending(true);
    setError(null);

    try {
      await signOut(auth);
      console.log("✅ GitHub logout success");
    } catch (err) {
      console.error("❌ Logout Failed:", err);
      setError(err);
    } finally {
      setPending(false);
    }
  };

  return { gitHubLogin, gitHubLogout, user, pending, error };
};
