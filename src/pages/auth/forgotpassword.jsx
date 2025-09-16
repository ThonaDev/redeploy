import { useState } from "react";
import VerifyImage from '../../images/verify.png';
import JOBCollapLogo from '../../images/jobCollapLogo.png';

export default function ForgotPassword() {
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
      src={VerifyImage}
      alt="Sign up illustration"
      className="max-w-lg h-auto mt-14"
    />
  </div>
</div>


    {/* Right Side Login Form */}
<div className="w-1/2 flex flex-col justify-center p-10 bg-[#ECF2FF]">
  <h2 className="text-3xl text-center font-bold text-[#1A5276] mb-6">Enter your email to change password</h2>
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
    {/* Login button */}
     <button
            type="submit"
            className="w-40 bg-[#154360] text-white py-2 rounded-full   mt-6 hover:bg-[#1A5276] transition"
            >
            Verify
           </button>
  </form>


</div>
  </div>
</div>

  );
}
