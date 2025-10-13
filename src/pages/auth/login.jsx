// import { useState } from "react";
// import { FaEye, FaEyeSlash, FaFacebook, FaLinkedin } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import LoginImage from "../../assets/login.png";
// import JOBCollapLogo from "../../assets/jobCollapLogo.png";

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
//       <div className="w-full h-auto max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
//         {/* Left Side Illustration */}
//         <div className="relative hidden md:flex md:w-1/2 flex-col items-center justify-start bg-[#ECF2FF] p-8">
//           <div className="absolute top-6 left-6 flex flex-col items-start">
//             <h1 className="text-2xl lg:text-3xl font-bold text-[#1A5276]">Welcome to</h1>
//             <img
//               src={JOBCollapLogo}
//               alt="JOBCollap Logo"
//               className="h-10 lg:h-12 mt-1"
//             />
//           </div>
//           <div className="text-center w-full max-w-sm relative mt-20">
//             <img
//               src={LoginImage}
//               alt="Login Illustration"
//               className="w-full h-auto max-w-md"
//             />
//           </div>
//         </div>

//         {/* Right Side Login Form */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-10 bg-[#ECF2FF]">
//           <h2 className="text-2xl sm:text-3xl text-center font-bold text-[#1A5276] mb-6">
//             Login
//           </h2>
//           <form className="space-y-5 flex flex-col items-center">
//             {/* Email */}
//             <div className="w-full sm:w-11/12">
//               <label className="block text-md font-bold text-[#1A5276]">Email</label>
//               <input
//                 type="email"
//                 placeholder="jobcollab123@gmail.com"
//                 className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
//               />
//             </div>

//             {/* Password */}
//             <div className="relative w-full sm:w-11/12">
//               <label className="block text-md font-bold text-[#1A5276]">Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
//               />
//               <button
//                 type="button"
//                 className="absolute top-10 right-3 text-gray-600"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
//               </button>
//               <div className="text-right mt-1">
//                 <a href="#" className="text-sm text-[#1A5276] hover:underline">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             {/* Login button */}
//             <button
//               type="submit"
//               className="w-40 bg-[#154360] text-white py-2 rounded-full mt-6 hover:bg-[#149AC5] transition"
//             >
//               Login
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
//             <a href="#" className="text-[#1A5276] hover:underline">Register</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// CODE with flow 



import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import { FaEye, FaEyeSlash, FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LoginImage from "../../assets/login.png";
import JOBCollapLogo from "../../assets/jobCollapLogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // ✅ initialize navigate

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    if (!email) {
      newErrors.email = "Please fill out this field";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email =
        "Please include '@' in the email address (e.g., user@domain.com)";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const result = await response.json();

      // ✅ Login success
      if (response.ok && result.status === 200 && result.data?.accessToken) {
        localStorage.setItem("accessToken", result.data.accessToken);
        localStorage.setItem("refreshToken", result.data.refreshToken);

        toast.success("🎉 Login successfully!", {
          position: "top-center",
          autoClose: 2500,
        });

        // redirect to home page after login success
        setTimeout(() => navigate("/home"), 2500);
      }
      // ✅ Invalid credentials
      else if (result.message?.toLowerCase().includes("invalid")) {
        toast.error("❌ Invalid email or password. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
      // ✅ Other errors
      else {
        toast.error("🚨 Something went wrong. Please try again later.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("❌ Login failed. Invalid email or password. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <div className="w-full h-auto max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side Illustration */}
        <div className="relative hidden md:flex md:w-1/2 flex-col items-center justify-start bg-[#ECF2FF] p-8">
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

          <form
            onSubmit={handleSubmit}
            className="space-y-5 flex flex-col items-center"
          >
            {/* Email */}
            <div className="w-full sm:w-11/12">
              <label className="block text-md font-bold text-[#1A5276]">
                Email
              </label>
              <input
                type="text"
                placeholder="jobcollab123@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white focus:ring-2 focus:ring-[#149AC5] outline-none"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative w-full sm:w-11/12">
              <label className="block text-md font-bold text-[#1A5276]">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
              <div className="text-right mt-1">
                {/* ✅ navigate to forgot password page */}
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-sm text-[#1A5276] hover:underline"
                >
                  Forgot password?
                </button>
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
              <a href="#" className="text-black">
                <FaGithub />
              </a>
              <a href="#" className="text-blue-700">
                <FaLinkedin />
              </a>
              <a href="#">
                <FcGoogle />
              </a>
            </div>
          </div>

          {/* Register link */}
          <p className="mt-4 text-lg text-center">
            Don&apos;t have an account?{" "}
            {/* ✅ navigate to register page */}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-[#1A5276] hover:underline"
            >
              Register
            </button>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
