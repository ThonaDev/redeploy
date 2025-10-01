import { useState } from "react";
import VerifyImage from "../../assets/verify.png";
import JOBCollapLogo from "../../assets/jobCollapLogo.png";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <div className="w-full h-auto max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side Illustration */}
        <div className="relative hidden md:flex md:w-1/2 flex-col items-center justify-start bg-[#ECF2FF] p-8">
          <div className="absolute top-6 left-6 flex flex-col items-start">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#1A5276]">Welcome to</h1>
            <img src={JOBCollapLogo} alt="JOBCollap Logo" className="h-10 lg:h-12 mt-1" />
          </div>
          <div className="text-center w-full max-w-sm relative mt-20">
            <img src={VerifyImage} alt="Verify Illustration" className="w-full h-auto max-w-md" />
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-10 bg-[#ECF2FF]">
          <h2 className="text-2xl sm:text-3xl text-center font-bold text-[#1A5276] mb-6">
            Enter your email to change password
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

            {/* Verify button */}
            <button
              type="submit"
              className="w-40 bg-[#154360] text-white py-2 rounded-full mt-6 hover:bg-[#149AC5] transition"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
