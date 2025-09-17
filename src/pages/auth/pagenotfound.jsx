import React from "react";
import { useNavigate } from "react-router-dom";
import PageNotFoundImage from '../../assets/pageNotFound.png'; 


export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6">
      <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl">
        {/* Left side text */}
        <div className="pt-10">
          <h1 className="text-5xl font-extrabold text-[#154360] mb-6">
            Page Not Found !!
          </h1>
          <p className="text-3xl text-[#149AC5] mb-10 leading-relaxed font-bold">
            We can’t find the page <br /> you were looking for.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-full bg-[#154360] text-white font-semibold hover:bg-[#149AC5] transition"
          >
            Go Back
          </button>
        </div>

        {/* Right side image */}
        <div className="flex justify-center pt-4">
          <img
            src={PageNotFoundImage}
            alt="404 Illustration"
            className="w-[420px] md:w-[480px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
