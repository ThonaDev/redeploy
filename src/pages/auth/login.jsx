import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LoginImage from '../../assets/login.png';
import JOBCollapLogo from '../../assets/jobCollapLogo.png';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
   <div className="flex items-center justify-center min-h-screen bg-blue-50">
  <div className="w-full h-auto max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
    
    {/* Left Side Illustration */}
<div className="relative hidden md:flex w-1/2 flex-col items-center justify-start bg-[#ECF2FF] p-8">
  <div className="absolute top-8 left-8 flex flex-col items-start">
    <h1 className="text-3xl font-bold text-[#1A5276]">Welcome to</h1>
    <img
      src={JOBCollapLogo}
      alt="JOBCollap Logo"
      className="h-12 mt-1"
    />
  </div>
  <div className="text-center w-full max-w-sm relative mt-14">
    <img
      src={LoginImage}
      alt="Sign up illustration"
      className="max-w-lg h-auto mt-14"
    />
  </div>
</div>


    {/* Right Side Login Form */}
<div className="w-1/2 flex flex-col justify-center p-10 bg-[#ECF2FF]">
  <h2 className="text-3xl text-center font-bold text-[#1A5276] mb-6">Login</h2>
  <form className="space-y-4 flex flex-col items-center">
    {/* Email */}
    <div className="w-11/12">
      <label className="block text-md font-bold text-[#1A5276]">Email</label>
      <input
        type="email"
        placeholder="jobcollab123@gmail.com"
        className="w-11/11 p-2 border border-[#1A5276] rounded-lg mt-1 bg-[#FFFFFF]"
      />
    </div>

    {/* Password */}
    <div className="relative w-11/12">
      <label className="block text-md font-bold text-[#1A5276]">Password</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="w-11/11 p-2 border border-[#1A5276] rounded-lg mt-1 bg-[#FFFFFF]"
      />
      <button
        type="button"
        className="absolute top-10 right-3 text-gray-600"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaEye size={18}/> : <FaEyeSlash size={18}/>}
      </button>
      <div className="text-right mt-1 ">
        <a href="#" className="text-sm text-[#1A5276] hover:underline">Forget password?</a>
      </div>
    </div>

    {/* Login button */}
     <button
            type="submit"
            className="w-40 bg-[#154360] text-white py-2 rounded-full   mt-6 hover:bg-[#149AC5] transition"
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
    Don't have account?{" "}
    <a href="#" className="text-[#1A5276] hover:underline">Register</a>
  </p>
</div>

  </div>
</div>

  );
}
