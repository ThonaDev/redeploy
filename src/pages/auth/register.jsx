import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterImage from "../../assets/register.png";
import JOBCollapLogo from "../../assets/jobCollapLogo.png";

// Validation libraries
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Redux and API integrations
import { useRegisterMutation, useLoginMutation } from "../../features/api/apiSlice";
import { setCredentials } from "../../features/auth/authSlide";
import { useAppDispatch } from "../../store";
import { storeAccessToken, storeRefreshToken, generateSecurePassword, storeSocialPassword } from "../../utils/tokenUtils";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

// Password regex
const strongPasswordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
);

// Zod schema for validation
const registerSchema = z
  .object({
    userName: z
      .string()
      .nonempty("Please fill out this field")
      .min(3, "Username must be at least 3 characters"),
    email: z
      .string()
      .nonempty("Please fill out this field")
      .email("Please include '@' in the email address (e.g., user@domain.com)"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .regex(
        strongPasswordRegex,
        "Password must include an uppercase letter, a lowercase letter, a number, and a symbol (e.g., Sokeang@1234)"
      ),
    confirmPassword: z.string().nonempty("Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSocialLoading, setIsSocialLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [registerUser, { isLoading }] = useRegisterMutation(); // Added isLoading
  const [login] = useLoginMutation();

  const {
    register, // From useForm
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Form submission handler (manual register)
  const onSubmit = async (data) => {
    try {
      const { userName, email, password } = data;
      const result = await registerUser({ userName, email, password }).unwrap();
      console.log("✅ Registered:", result);

      if (result?.token) {
        localStorage.setItem("accessToken", result.token);
      }

      toast.success(
        "User registered successfully. Please check your email to verify your account.",
        { position: "top-center", autoClose: 5000 }
      );

      reset();
      localStorage.setItem("redirectToLogin", "true");
    } catch (err) {
      console.error("❌ Registration failed:", err);
      toast.error(
        err?.data?.message || "Registration failed! Please try again.",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    }
  };

  // Updated Social login with improved error handling
  const handleSocialLogin = async (providerType) => {
    try {
      setIsSocialLoading(true);
      await signOut(auth).catch((err) => console.error("Sign out error:", err));

      const provider =
        providerType === "github"
          ? new GithubAuthProvider()
          : new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;
      const email = firebaseUser.email;
      const userName = firebaseUser.displayName || firebaseUser.email.split('@')[0]; // Fallback to email prefix

      // Generate a secure password for the new account
      const socialPassword = generateSecurePassword();
      console.log("password: ", socialPassword);
      storeSocialPassword(email, socialPassword);

      // Attempt registration for new user
      const registerPayload = { userName, email, password: socialPassword };
      const registerResponse = await registerUser(registerPayload).unwrap();

      // If registration succeeds, log in immediately
      const loginPayload = { email, password: socialPassword };
      const loginResponse = await login(loginPayload).unwrap();

      dispatch(
        setCredentials({
          accessToken: loginResponse.data.accessToken,
          refreshToken: loginResponse.data.refreshToken,
        })
      );
      storeAccessToken(loginResponse.data.accessToken);
      storeRefreshToken(loginResponse.data.refreshToken);

      toast.success("✅ Account created and logged in with social!", {
        position: "top-center",
        autoClose: 2500,
      });
      navigate("/");
    } catch (error) {
      console.error(`${providerType} login error:`, error);

      if (error.code === "auth/account-exists-with-different-credential") {
        const email = error.customData?.email;
        const methods = await fetchSignInMethodsForEmail(auth, email);
        toast.error(
          `Email already used with ${methods.join(", ")}. Please login with that provider first.`,
          { position: "top-center", autoClose: 5000 }
        );
      } else if (error.status === 500) {
        // Email already existed
        toast.error(
          "This email is already registered. Please use normal login with your password.",
          { position: "top-center", autoClose: 5000 }
        );
        navigate("/login");
      } else if (error.status === 400) {
        // Password or Email is not valid (unexpected, but handle it)
        toast.error("🚨 An error occurred during social login. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        toast.error(`🚨 ${providerType} login failed`, {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } finally {
      setIsSocialLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left side */}
          <div className="hidden md:flex md:w-1/2 flex-col items-center justify-start bg-[#ECF2FF] p-8 relative">
            <div className="absolute top-6 left-6 flex flex-col items-start">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#1A5276]">
                Welcome to
              </h1>
              <img
                src={JOBCollapLogo}
                alt="JOBCollap Logo"
                className="h-10 lg:h-12 mt-1"
              />
            </div>
            <div className="text-center w-full max-w-sm mt-20">
              <img
                src={RegisterImage}
                alt="Register Illustration"
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-10 bg-[#ECF2FF]">
            <h2 className="text-2xl sm:text-3xl text-center font-bold text-[#1A5276] mb-6">
              Register
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 flex flex-col items-center"
            >
              {/* Username */}
              <div className="w-full sm:w-11/12">
                <label className="block text-md font-bold text-[#1A5276]">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Sokkeang"
                  {...register("userName")}
                  className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
                />
                {errors.userName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.userName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="w-full sm:w-11/12">
                <label className="block text-md font-bold text-[#1A5276]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Sokkeang123@gmail.com"
                  {...register("email")}
                  className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative w-full sm:w-11/12">
                <label className="block text-md font-bold text-[#1A5276]">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Sok1234#!"
                  {...register("password")}
                  className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
                />
                <button
                  type="button"
                  className="absolute top-10 right-3 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative w-full sm:w-11/12">
                <label className="block text-md font-bold text-[#1A5276]">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Sok1234#!"
                  {...register("confirmPassword")}
                  className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
                />
                <button
                  type="button"
                  className="absolute top-10 right-3 text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
                {errors.confirmPassword && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Register button (fixed with isLoading) */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-40 bg-[#154360] text-white py-2 rounded-full mt-6 hover:bg-[#149AC5] transition disabled:opacity-50"
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </form>

            <div className="mt-6 text-center w-full">
              <p className="text-lg mb-3 text-[#1A5276]">Or sign up with</p>
              <div className="flex justify-center space-x-5 text-3xl">
                <FaGithub
                  size={42}
                  onClick={() => !isSocialLoading && handleSocialLogin("github")}
                  className={`cursor-pointer text-black hover:scale-110 transition ${
                    isSocialLoading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
                <FcGoogle
                  size={48}
                  onClick={() => !isSocialLoading && handleSocialLogin("google")}
                  className={`cursor-pointer hover:scale-110 transition ${
                    isSocialLoading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
              </div>
            </div>

            <p className="mt-4 text-lg text-center">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-[#1A5276] hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
        <ToastContainer />
      </div>
    </ErrorBoundary>
  );
}