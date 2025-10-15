import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added for navigation
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
import { useRegisterMutation } from "../../features/api/apiSlice";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  signOut,
  signInWithCredential,
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
    path: ["confirmPassword"], // Show the error on the confirmPassword field
  });

// Error Boundary Component (kept as-is)
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
  // State for showing/hiding passwords
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSocialLoading, setIsSocialLoading] = useState(false); // ✅ Added this line
  const navigate = useNavigate();

  // RTK Query mutation for register
  const [registerUser, { isLoading }] = useRegisterMutation();

  // React Hook Form setup
  const {
    register,
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

  // Form submission handler
  const onSubmit = async (data) => {
    const { userName, email, password } = data;

    try {
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

  // Social login
  const handleSocialLogin = async (providerType) => {
    try {
      setIsSocialLoading(true);
      await signOut(auth);

      const provider =
        providerType === "github"
          ? new GithubAuthProvider()
          : new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log(`${providerType} user:`, user);
      toast.success(`✅ Registerd in with ${providerType}`, {
        position: "top-center",
        autoClose: 2500,
      });
      navigate("/");
    } catch (error) {
      console.error(`${providerType} Register error:`, error);

      if (error.code === "auth/account-exists-with-different-credential") {
        const email = error.customData.email;
        const pendingCred =
          providerType === "github"
            ? GithubAuthProvider.credentialFromError(error)
            : GoogleAuthProvider.credentialFromError(error);

        const methods = await fetchSignInMethodsForEmail(auth, email);
        toast.error(
          `Email already exists with ${methods.join(
            ", "
          )}. Please login using that provider first.`,
          {
            position: "top-center",
            autoClose: 5000,
          }
        );
      } else {
        toast.error(`🚨 ${providerType} Register failed`, {
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
      <div className="flex items-center justify-center min-h-screen bg-blue-50 p-4">
        <div className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side Illustration */}
          <div className="hidden md:flex md:w-1/2 flex-col items-center justify-start bg-[#ECF2FF] p-8 relative">
            <div className="absolute top-8 left-8 flex flex-col items-start">
              <h1 className="text-3xl font-bold text-[#1A5276]">Welcome to</h1>
              <img
                src={JOBCollapLogo}
                alt="JOBCollap Logo"
                className="h-12 mt-1"
              />
            </div>
            <div className="text-center w-full max-w-sm mt-14">
              <img
                src={RegisterImage}
                alt="Sign up illustration"
                className="max-w-md h-auto mx-auto"
              />
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 bg-[#ECF2FF]">
            <div className="md:hidden text-center mb-6">
              <h1 className="text-2xl font-bold text-[#1A5276]">Welcome to </h1>
              <img
                src={JOBCollapLogo}
                alt="JOBCollap Logo"
                className="h-10 mx-auto mt-2"
              />
            </div>

            <h2 className="text-3xl text-center font-bold text-[#1A5276] mb-6">
              Register
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-4 flex flex-col items-center w-full"
            >
              {/* Username */}
              <div className="w-full">
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
              <div className="w-full">
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
              <div className="relative w-full">
                <label className="block text-md font-bold text-[#1A5276]">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Sok1234#!"
                  {...register("password")}
                  className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
                  required
                />
                <button
                  type="button"
                  className="absolute top-9 right-3 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye size={18} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </button>
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative w-full">
                <label className="block text-md font-bold text-[#1A5276]">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Sok1234#!"
                  {...register("confirmPassword")}
                  className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
                  required
                />
                <button
                  type="button"
                  className="absolute top-9 right-3 text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEye size={18} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </button>
                {errors.confirmPassword && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full md:w-40 bg-[#154360] text-white py-2 rounded-full mt-6 hover:bg-[#149AC5] transition disabled:opacity-50"
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </form>

            <div className="mt-6 text-center w-full">
              <p className="text-lg mb-3 text-[#1A5276]">Login with</p>
              <div className="flex justify-center space-x-5 text-3xl">
                <FaGithub
                  size={42}
                  onClick={() =>
                    !isSocialLoading && handleSocialLogin("github")
                  }
                  className={`cursor-pointer text-black hover:scale-110 transition ${
                    isSocialLoading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
                <FcGoogle
                  size={48}
                  onClick={() =>
                    !isSocialLoading && handleSocialLogin("google")
                  }
                  className={`cursor-pointer hover:scale-110 transition ${
                    isSocialLoading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
              </div>
            </div>

            {/* Redirect to login page */}
            <p className="mt-4 text-lg text-center w-full">
              Already have account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-[#1A5276] hover:underline"
              >
                Login
              </button>
            </p>

            <ToastContainer />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
