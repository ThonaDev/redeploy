import {
  GoogleAuthProvider,
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

export const useLoginWithGoogle = () => {
  const [signUpRequest] = useRegisterMutation();
  const [loginRequest] = useLoginMutation();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  const googleLogin = async () => {
    setPending(true);
    setError(null);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res?.user) throw new Error("Google login failed");

      const user = res.user;
      console.log("✅ Google Info:", user);

      const password = `${user?.displayName?.substring(0, 4) || "GG"}${
        import.meta.env.VITE_SECRET_KEY
      }`;

      try {
        await signUpRequest({
          username: "GG_" + (user?.displayName?.substring(0, 4) || "User"),
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

        console.log("✅ Signup success with Google account");
      } catch (err) {
        console.log("⚠️ Signup error, trying login...", err);

        await loginRequest({
          email: user?.email,
          password,
        }).unwrap();

        console.log("✅ Login success with Google account");
      }

      setPending(false);
    } catch (err) {
      console.error("❌ Google Login Failed:", err);
      setError(err);
      setPending(false);
    }
  };

  const googleLogout = async () => {
    setPending(true);
    setError(null);

    try {
      await signOut(auth);
      console.log("✅ Google logout success");
    } catch (err) {
      console.error("❌ Logout Failed:", err);
      setError(err);
    } finally {
      setPending(false);
    }
  };

  return { googleLogin, googleLogout, user, pending, error };
};
