
// import React from "react"; // Added to support class components
// import { useState } from "react";
// import { FaEye, FaEyeSlash, FaFacebook, FaLinkedin } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { useRegisterMutation } from "../../features/auth/authSlide";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import RegisterImage from "../../assets/register.png";
// import JOBCollapLogo from "../../assets/jobCollapLogo.png";

// // Error Boundary Component
// class ErrorBoundary extends React.Component {
//   state = { hasError: false };

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("Error caught by boundary:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong. Please try again later.</h1>;
//     }
//     return this.props.children;
//   }
// }

// export default function Register() {
//   // Form states
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({
//     userName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // RTK Query mutation
//   const [registerUser, { isLoading, error, data }] = useRegisterMutation();

//   const validateForm = () => {
//     const newErrors = {
//       userName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };
//     let isValid = true;

//     // Username validation
//     if (!userName) {
//       newErrors.userName = "Please fill out this field";
//       isValid = false;
//     } else if (userName.length < 3) {
//       newErrors.userName = "Username must be at least 3 characters";
//       isValid = false;
//     }

//     // Email validation
//     if (!email) {
//       newErrors.email = "Please fill out this field";
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       newErrors.email = "Please include '@' in the email address (e.g., user@domain.com)";
//       isValid = false;
//     }

//     // Password validation
//     if (!password) {
//       newErrors.password = "Password is required";
//       isValid = false;
//     } else if (password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//       isValid = false;
//     } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
//       newErrors.password = "Password must include a letter, number, and special character";
//       isValid = false;
//     }

//     // Confirm Password validation
//     if (!confirmPassword) {
//       newErrors.confirmPassword = "Confirm password is required";
//       isValid = false;
//     } else if (password !== confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Validate form before submission
//   if (!validateForm()) {
//     return;
//   }

//   try {
//     const result = await registerUser({ userName, email, password }).unwrap();
//     console.log("✅ Registered:", result);

//     // If your API sends back token
//     if (result?.token) {
//       localStorage.setItem("accessToken", result.token);
//     }

//     // ✅ After successful registration
//     toast.success(
//       "User registered successfully. Please check your email to verify your account.",
//       {
//         position: "top-center",
//         autoClose: 5000,
//       }
//     );

//     // ✅ set flag for redirect when user returns to website
//     localStorage.setItem("redirectToLogin", "true");
    
//   } catch (err) {
//     console.error("❌ Registration failed:", err);
//     toast.error(
//       err?.data?.message || "Registration failed! Please try again.",
//       {
//         position: "top-center",
//         autoClose: 5000,
//       }
//     );
//   }
// };
//   return (
//     <ErrorBoundary>
//       <div className="flex items-center justify-center min-h-screen bg-blue-50 p-4">
//         <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
//           {/* Left Side Illustration (desktop) */}
//           <div className="hidden md:flex md:w-1/2 flex-col items-center justify-start bg-[#ECF2FF] p-8 relative">
//             <div className="absolute top-8 left-8 flex flex-col items-start">
//               <h1 className="text-3xl font-bold text-[#1A5276]">Welcome to</h1>
//               <img
//                 src={JOBCollapLogo}
//                 alt="JOBCollap Logo"
//                 className="h-12 mt-1"
//               />
//             </div>
//             <div className="text-center w-full max-w-sm mt-14">
//               <img
//                 src={RegisterImage}
//                 alt="Sign up illustration"
//                 className="max-w-md h-auto mx-auto"
//               />
//             </div>
//           </div>

//           {/* Right Side Register Form */}
//           <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 bg-[#ECF2FF]">
//             {/* Mobile Welcome Header */}
//             <div className="md:hidden text-center mb-6">
//               <h1 className="text-2xl font-bold text-[#1A5276]">Welcome to </h1>
//               <img
//                 src={JOBCollapLogo}
//                 alt="JOBCollap Logo"
//                 className="h-10 mx-auto mt-2"
//               />
//             </div>

//             <h2 className="text-3xl text-center font-bold text-[#1A5276] mb-6">
//               Register
//             </h2>

//             <form
//               onSubmit={handleSubmit}
//               noValidate   // disable browser default alerts
//               className="space-y-4 flex flex-col items-center w-full"
//             >
//               <div className="w-full">
//                 <label className="block text-md font-bold text-[#1A5276]">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   value={userName}
//                   onChange={(e) => setUserName(e.target.value)}
//                   placeholder="Sokkeang"
//                   className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
//                 />
//                 {errors.userName && (
//                   <p className="text-red-600 text-sm mt-1">{errors.userName}</p>
//                 )}
//               </div>

//               <div className="w-full">
//                 <label className="block text-md font-bold text-[#1A5276]">
//                   Email
//                 </label>
//                 <input
//                   type="text"  // disable default popup, custom validation handles it
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Sokkeang123@gmail.com"
//                   className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
//                 />
//                 {errors.email && (
//                   <p className="text-red-600 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               <div className="relative w-full">
//                 <label className="block text-md font-bold text-[#1A5276]">
//                   Password
//                 </label>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Sok1234#!"
//                   className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
//                   required
//                 />
//                 <button
//                   type="button"
//                   className="absolute top-9 right-3 text-gray-600"
//                   onClick={() => setShowPassword(!showPassword)}
//                   key={`password-eye-${showPassword}`} // Ensure single render
//                 >
//                   {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
//                 </button>
//                 {errors.password && (
//                   <p className="text-red-600 text-sm mt-1">{errors.password}</p>
//                 )}
//               </div>

//               <div className="relative w-full">
//                 <label className="block text-md font-bold text-[#1A5276]">
//                   Confirm Password
//                 </label>
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   placeholder="Sok1234#!"
//                   className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
//                   required
//                 />
//                 <button
//                   type="button"
//                   className="absolute top-9 right-3 text-gray-600"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   key={`confirm-eye-${showConfirmPassword}`} // Ensure single render
//                 >
//                   {showConfirmPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
//                 </button>
//                 {errors.confirmPassword && (
//                   <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full md:w-40 bg-[#154360] text-white py-2 rounded-full mt-6 hover:bg-[#149AC5] transition"
//               >
//                 {isLoading ? "Registering..." : "Register"}
//               </button>
//             </form>

//             {/* Social login */}
//             <div className="mt-6 text-center w-full">
//               <p className="text-lg mb-3 text-[#1A5276]">Login with</p>
//               <div className="flex justify-center space-x-5 text-3xl">
//                 <a href="#" className="text-blue-600">
//                   <FaFacebook />
//                 </a>
//                 <a href="#" className="text-blue-700">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#">
//                   <FcGoogle />
//                 </a>
//               </div>
//             </div>

//             <p className="mt-4 text-lg text-center w-full">
//               Already have account?{" "}
//               <a href="#" className="text-[#1A5276] hover:underline">
//                 Login
//               </a>
//             </p>

//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </ErrorBoundary>
//   );
// }









import React from "react"; 
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaLinkedin } from "react-icons/fa"; 
import { FcGoogle } from "react-icons/fc";
import { useRegisterMutation } from "../../features/auth/authSlide";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterImage from "../../assets/register.png";
import JOBCollapLogo from "../../assets/jobCollapLogo.png";
import { useLoginWithGitHub } from "../../components/social-auth/GithubAuthComponent";
import { useLoginWithLinkedIn } from "../../components/social-auth/LinkedInAuthComponent";
import { useLoginWithGoogle } from "../../components/social-auth/GoogleAuthComponent";

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
  // Form states
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { gitHubLogin } = useLoginWithGitHub();
  const { linkedInLogin } = useLoginWithLinkedIn();
  const { googleLogin } = useLoginWithGoogle();
  const [errors, setErrors] = useState({
    
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerUser, { isLoading }] = useRegisterMutation();

  const validateForm = () => {
    const newErrors = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    if (!userName) {
      newErrors.userName = "Please fill out this field";
      isValid = false;
    } else if (userName.length < 3) {
      newErrors.userName = "Username must be at least 3 characters";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Please fill out this field";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email =
        "Please include '@' in the email address (e.g., user@domain.com)";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    } else if (
      !/[A-Za-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    ) {
      newErrors.password =
        "Password must include a letter, number, and special character";
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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

      localStorage.setItem("redirectToLogin", "true");
    } catch (err) {
      console.error("❌ Registration failed:", err);
      toast.error(err?.data?.message || "Registration failed! Please try again.", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <ErrorBoundary>
      <div className="flex items-center justify-center min-h-screen bg-blue-50 p-4">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side Illustration */}
          <div className="hidden md:flex md:w-1/2 flex-col items-center justify-start bg-[#ECF2FF] p-8 relative">
            <div className="absolute top-8 left-8 flex flex-col items-start">
              <h1 className="text-3xl font-bold text-[#1A5276]">Welcome to</h1>
              <img src={JOBCollapLogo} alt="JOBCollap Logo" className="h-12 mt-1" />
            </div>
            <div className="text-center w-full max-w-sm mt-14">
              <img src={RegisterImage} alt="Sign up illustration" className="max-w-md h-auto mx-auto" />
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 bg-[#ECF2FF]">
            <div className="md:hidden text-center mb-6">
              <h1 className="text-2xl font-bold text-[#1A5276]">Welcome to </h1>
              <img src={JOBCollapLogo} alt="JOBCollap Logo" className="h-10 mx-auto mt-2" />
            </div>

            <h2 className="text-3xl text-center font-bold text-[#1A5276] mb-6">Register</h2>

            <form onSubmit={handleSubmit} noValidate className="space-y-4 flex flex-col items-center w-full">
              {/* Username */}
              <div className="w-full">
                <label className="block text-md font-bold text-[#1A5276]">Username</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Sokkeang"
                  className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
                />
                {errors.userName && <p className="text-red-600 text-sm mt-1">{errors.userName}</p>}
              </div>

              {/* Email */}
              <div className="w-full">
                <label className="block text-md font-bold text-[#1A5276]">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Sokkeang123@gmail.com"
                  className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className="relative w-full">
                <label className="block text-md font-bold text-[#1A5276]">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Sok1234#!"
                  className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
                  required
                />
                <button
                  type="button"
                  className="absolute top-9 right-3 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
                {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div className="relative w-full">
                <label className="block text-md font-bold text-[#1A5276]">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Sok1234#!"
                  className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
                  required
                />
                <button
                  type="button"
                  className="absolute top-9 right-3 text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
                {errors.confirmPassword && (
                  <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full md:w-40 bg-[#154360] text-white py-2 rounded-full mt-6 hover:bg-[#149AC5] transition"
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </form>

            {/* ✅ Social login */}
            <div className="mt-6 text-center w-full">
              <p className="text-lg mb-3 text-[#1A5276]">Login with</p>
              <div className="flex justify-center space-x-5 text-3xl">
               <FaGithub
                  onClick={gitHubLogin}
              className="cursor-pointer text-black hover:scale-110 transition"
               />
              <FaLinkedin
              onClick={linkedInLogin}
               className="cursor-pointer text-blue-700 hover:scale-110 transition"
              />
              <FcGoogle
                onClick={googleLogin}
                className="cursor-pointer hover:scale-110 transition"
              />
            </div>


            </div>

            {/* ✅ Redirect to login page */}
            <p className="mt-4 text-lg text-center w-full">
              Already have account?{" "}
              <a href="/login" className="text-[#1A5276] hover:underline">
                Login
              </a>
            </p>

            <ToastContainer />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
