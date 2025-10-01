import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LoginImage from "../../assets/login.png";
import JOBCollapLogo from "../../assets/jobCollapLogo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <div className="w-full h-auto max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side Illustration */}
        <div className="relative hidden md:flex md:w-1/2 flex-col items-center justify-start bg-[#ECF2FF] p-8">
          <div className="absolute top-6 left-6 flex flex-col items-start">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#1A5276]">Welcome to</h1>
            <img
              src={JOBCollapLogo}
              alt="JOBCollap Logo"
              className="h-10 lg:h-12 mt-1"
            />
          </div>
          <div className="text-center w-full max-w-sm relative mt-20">
            <img
              src={LoginImage}
              alt="Login Illustration"
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-10 bg-[#ECF2FF]">
          <h2 className="text-2xl sm:text-3xl text-center font-bold text-[#1A5276] mb-6">
            Login
          </h2>
          <form className="space-y-5 flex flex-col items-center">
            {/* Email */}
            <div className="w-full sm:w-11/12">
              <label className="block text-md font-bold text-[#1A5276]">Email</label>
              <input
                type="email"
                placeholder="jobcollab123@gmail.com"
                className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative w-full sm:w-11/12">
              <label className="block text-md font-bold text-[#1A5276]">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
              />
              <button
                type="button"
                className="absolute top-10 right-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </button>
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-[#1A5276] hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-40 bg-[#154360] text-white py-2 rounded-full mt-6 hover:bg-[#149AC5] transition"
            >
              Login
            </button>
          </form>

          {/* Social login */}
          <div className="mt-6 text-center">
            <p className="text-lg mb-3 text-[#1A5276]">Login with</p>
            <div className="flex justify-center space-x-5 text-3xl">
              <a href="#" className="text-blue-600"><FaFacebook /></a>
              <a href="#" className="text-blue-700"><FaLinkedin /></a>
              <a href="#"><FcGoogle /></a>
            </div>
          </div>

          {/* Register link */}
          <p className="mt-4 text-lg text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-[#1A5276] hover:underline">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}








// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash, FaFacebook, FaLinkedin } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import LoginImage from "../../assets/login.png";
// import JOBCollapLogo from "../../assets/jobCollapLogo.png";

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   // field-specific errors
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [globalError, setGlobalError] = useState("");
//   const [success, setSuccess] = useState("");

//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setEmailError("");
//     setPasswordError("");
//     setGlobalError("");
//     setSuccess("");

//     // field validation
//     let valid = true;
//     if (!email) {
//       setEmailError("⚠️ Email is required.");
//       valid = false;
//     } else if (!validateEmail(email)) {
//       setEmailError("⚠️ Please enter a valid email.");
//       valid = false;
//     }

//     if (!password) {
//       setPasswordError("⚠️ Password is required.");
//       valid = false;
//     } else if (password.length < 6) {
//       setPasswordError("⚠️ Password must be at least 6 characters.");
//       valid = false;
//     }

//     if (!valid) return;

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         let errorMessage = "Login failed. Please try again.";
//         try {
//           const data = await response.json();
//           errorMessage = data.message || errorMessage;
//         } catch {
//           errorMessage = "Unexpected error occurred.";
//         }
//         throw new Error(errorMessage);
//       }

//       const data = await response.json();

//       if (data.token) {
//         localStorage.setItem("token", data.token);
//       }

//       setSuccess("✅ Login successful!");
//       console.log("Logged in:", data);

//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 1200);
//     } catch (err) {
//       setGlobalError(err.message || "Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
//       <div className="w-full h-auto max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
//         {/* Left Side Illustration */}
//         <div className="relative hidden md:flex md:w-1/2 flex-col items-center justify-start bg-[#ECF2FF] p-8">
//           <div className="absolute top-6 left-6 flex flex-col items-start">
//             <h1 className="text-2xl lg:text-3xl font-bold text-[#1A5276]">Welcome to</h1>
//             <img src={JOBCollapLogo} alt="JOBCollap Logo" className="h-10 lg:h-12 mt-1" />
//           </div>
//           <div className="text-center w-full max-w-sm relative mt-20">
//             <img src={LoginImage} alt="Login Illustration" className="w-full h-auto max-w-md" />
//           </div>
//         </div>

//         {/* Right Side Login Form */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-10 bg-[#ECF2FF]">
//           <h2 className="text-2xl sm:text-3xl text-center font-bold text-[#1A5276] mb-6">Login</h2>

//           {/* Global error / success */}
//           {globalError && <p className="text-red-600 text-center mb-3">{globalError}</p>}
//           {success && <p className="text-green-600 text-center mb-3">{success}</p>}

//           <form className="space-y-5 flex flex-col items-center" onSubmit={handleLogin}>
//             {/* Email */}
//             <div className="w-full sm:w-11/12">
//               <label className="block text-md font-bold text-[#1A5276]">Email</label>
//               <input
//                 type="email"
//                 placeholder="jobcollab123@gmail.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
//               />
//               {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
//             </div>

//             {/* Password */}
//             <div className="relative w-full sm:w-11/12">
//               <label className="block text-md font-bold text-[#1A5276]">Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
//               />
//               <button
//                 type="button"
//                 className="absolute top-10 right-3 text-gray-600"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
//               </button>
//               {passwordError && <p className="text-red-600 text-sm mt-1">{passwordError}</p>}
//               <div className="text-right mt-1">
//                 <a href="#" className="text-sm text-[#1A5276] hover:underline">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             {/* Login button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-40 bg-[#154360] text-white py-2 rounded-full mt-6 hover:bg-[#149AC5] transition disabled:opacity-50"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           {/* Social login */}
//           <div className="mt-6 text-center">
//             <p className="text-lg mb-3 text-[#1A5276]">Login with</p>
//             <div className="flex justify-center space-x-5 text-3xl">
//               <a href="#" className="text-blue-600"><FaFacebook /></a>
//               <a href="#" className="text-blue-700"><FaLinkedin /></a>
//               <a href="#"><FcGoogle /></a>
//             </div>
//           </div>

//           {/* Register link */}
//           <p className="mt-4 text-lg text-center">
//             Don&apos;t have an account?{" "}
//             <a href="/register" className="text-[#1A5276] hover:underline">Register</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
