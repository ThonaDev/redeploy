import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

export default function GoogleAuthComponent() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google user:", result.user);
      alert("✅ Logged in with Google!");
    } catch (err) {
      console.error("Google login failed:", err);
      alert("❌ Google login failed");
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
    >
      Login with Google
    </button>
  );
}
