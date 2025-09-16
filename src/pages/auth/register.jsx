import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import RegisterImage from '../../images/register.png';
import JOBCollapLogo from '../../images/jobCollapLogo.png';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full h-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
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
      src={RegisterImage}
      alt="Sign up illustration"
      className="max-w-md h-auto"
    />
  </div>
</div>


        {/* Right Side Register Form */}
        <div className="w-1/2 flex flex-col justify-center p-10 bg-[#ECF2FF]">
          <h2 className="text-3xl text-center font-bold text-[#1A5276] mb-6">
            Register
          </h2>
          <form className="space-y-4 flex flex-col items-center">
            <div className="w-11/12">
              <label className="block text-md font-bold text-[#1A5276]">Username</label>
              <input
                type="text"
                placeholder="Sokkeang"
                className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
              />
            </div>
            <div className="w-11/12">
              <label className="block text-md font-bold text-[#1A5276]">Email</label>
              <input
                type="email"
                placeholder="Sokkeang123@gmail.com"
                className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
              />
            </div>
            <div className="relative w-11/12">
              <label className="block text-md font-bold text-[#1A5276]">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Sok1234#!"
                className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
              />
              <button
                type="button"
                className="absolute top-9 right-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye size={18}/> : <FaEyeSlash size={18} />}
              </button>
            </div>
            <div className="relative w-11/12">
              <label className="block text-md font-bold text-[#1A5276]">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Sok1234#!"
                className="w-full p-2 border border-[#1A5276] rounded-lg mt-1 bg-white"
              />
              <button
                type="button"
                className="absolute top-10 right-3 text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </button>
            </div>
           <button
            type="submit"
            className="w-40 bg-[#154360] text-white py-2 rounded-full   mt-6 hover:bg-[#1A5276] transition"
            >
            Register
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

          <p className="mt-4 text-lg text-center">
            Already have account?{" "}
            <a href="#" className="text-[#1A5276] hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
