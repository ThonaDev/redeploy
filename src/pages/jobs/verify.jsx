import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VerifyImage from "../../assets/verify.png";
import JOBCollapLogo from "../../assets/jobCollapLogo.png";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const verified = params.get("verified");

    if (verified === "true") {
      setIsVerified(true);
      setTimeout(() => navigate("/login"), 2500);
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="relative hidden md:flex md:w-1/2 flex-col items-center justify-start bg-[#ECF2FF] p-8">
          <div className="absolute top-6 left-6 flex flex-col items-start">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#1A5276]">Welcome to</h1>
            <img src={JOBCollapLogo} alt="Logo" className="h-10 lg:h-12 mt-1" />
          </div>
          <div className="text-center w-full max-w-sm mt-20">
            <img src={VerifyImage} alt="Verify" className="w-full h-auto max-w-md" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10 bg-[#ECF2FF] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A5276] mb-4">
            Please check your email
          </h2>
          <p className="text-md sm:text-lg text-[#1A5276] font-medium max-w-md mx-auto">
            We've sent a verification link to your email. Please verify your account to continue.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="w-48 bg-[#154360] text-white py-2 rounded-full mt-8 hover:bg-[#149AC5]"
          >
            Go to Login
          </button>

          {isVerified && (
            <p className="text-sm text-green-700 mt-3">
              ✅ Email verified! Redirecting to login...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
