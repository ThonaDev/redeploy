import {
  OAuthProvider,
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

export const useLoginWithLinkedIn = () => {
  const [signUpRequest] = useRegisterMutation();
  const [loginRequest] = useLoginMutation();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  // LinkedIn OAuth provider
  const provider = new OAuthProvider("linkedin.com");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  const linkedInLogin = async () => {
    setPending(true);
    setError(null);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res?.user) throw new Error("LinkedIn login failed");

      const user = res.user;
      console.log("✅ LinkedIn Info:", user);

      const password = `${user?.displayName?.substring(0, 4) || "LI"}${
        import.meta.env.VITE_SECRET_KEY
      }`;

      try {
        await signUpRequest({
          username: "LI_" + (user?.displayName?.substring(0, 4) || "User"),
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

        console.log("✅ Signup success with LinkedIn account");
      } catch (err) {
        console.log("⚠️ Signup error, trying login...", err);

        await loginRequest({
          email: user?.email,
          password,
        }).unwrap();

        console.log("✅ Login success with LinkedIn account");
      }

      setPending(false);
    } catch (err) {
      console.error("❌ LinkedIn Login Failed:", err);
      setError(err);
      setPending(false);
    }
  };

  const linkedInLogout = async () => {
    setPending(true);
    setError(null);

    try {
      await signOut(auth);
      console.log("✅ LinkedIn logout success");
    } catch (err) {
      console.error("❌ Logout Failed:", err);
      setError(err);
    } finally {
      setPending(false);
    }
  };

  return { linkedInLogin, linkedInLogout, user, pending, error };
};
