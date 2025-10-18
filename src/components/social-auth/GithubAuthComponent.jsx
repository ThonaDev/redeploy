import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  GithubAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { useLoginMutation } from "../../features/api/apiSlice";
import { setCredentials } from "../../features/auth/authSlide";
import { useAppDispatch } from "../../store";
import { storeAccessToken, storeRefreshToken } from "../../utils/tokenUtils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function GithubAuthComponent({
  isSocialLoading,
  setIsSocialLoading,
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const handleGithubLogin = async () => {
    try {
      setIsSocialLoading(true);
      await signOut(auth);

      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      const idToken = await firebaseUser.getIdToken();
      const email = firebaseUser.email;

      const payload = {
        email,
        password: "social-login-dummy",
        idToken,
        provider: "github",
      };

      const response = await login(payload).unwrap();

      dispatch(
        setCredentials({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        })
      );
      storeAccessToken(response.data.accessToken);
      storeRefreshToken(response.data.refreshToken);

      toast.success("✅ Logged in with GitHub", {
        position: "top-center",
        autoClose: 2500,
      });
      navigate("/");
    } catch (err) {
      console.error("GitHub login error:", err);

      if (err.code === "auth/account-exists-with-different-credential") {
        const email = err.customData?.email;
        const methods = await fetchSignInMethodsForEmail(auth, email);
        toast.error(
          `Email already used with ${methods.join(
            ", "
          )}. Please login with that provider first.`,
          { position: "top-center", autoClose: 5000 }
        );
      } else {
        toast.error("🚨 GitHub login failed", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } finally {
      setIsSocialLoading(false);
    }
  };

  return (
    <FaGithub
      size={42}
      onClick={() => !isSocialLoading && handleGithubLogin()}
      className={`cursor-pointer text-black hover:scale-110 transition ${
        isSocialLoading ? "opacity-60 cursor-not-allowed" : ""
      }`}
    />
  );
}