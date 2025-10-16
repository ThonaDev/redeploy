import React from "react";
// Switching back to react-icons, specifically using Font Awesome (fa) for broader compatibility.
import { FaUser, FaFileAlt, FaPaperPlane } from "react-icons/fa";

// Component for a single step card
const StepCard = ({ icon: Icon, title, description, color }) => (
  // Layout is centered (items-center, justify-center)
  // Dimensions are fixed to w=300px and h=157px as requested
  <div
    className={`flex flex-col items-center justify-center p-6 m-2 w-[300px] h-[157px] rounded-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer ${color}`}
  >
    {/* Icon is centered and has margin-bottom. Using size=40. */}
    <Icon className="text-white mb-4" size={40} />

    {/* Text is centered */}
    <p className="text-white text-base md:text-lg font-medium text-center">
      {title}
    </p>
    <p className="text-white text-xs md:text-sm text-center mt-1">
      {description}
    </p>
  </div>
);

// Main Application Component
const ThreeStepCard = () => {
  // Define the steps data using react-icons/fa: FaUser, FaFileAlt, FaPaperPlane
  const steps = [
    {
      icon: FaUser, // Switched to FaUser
      title: "Register for an account",
      color: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      icon: FaFileAlt, // Switched to FaFileAlt (for CV/Resume)
      title: "Upload Your CV",
      color: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      icon: FaPaperPlane, // Switched to FaPaperPlane (for Send)
      title: "Apply For Dream Job!",
      color: "bg-cyan-600 hover:bg-cyan-700",
    },
  ];

  return (
    // Background is light gray
    <div className=" font-Poppins mt-170 mb-11">
      {/* Title section */}
      <div className="text-center mb-10 mt-4">
        {/* Title text color is dark navy */}
        <h1 className="text-3xl sm:text-3xl md:text-[32px] font-semibold text-[#1A5276]">
          Only 3 Steps to Get Your Dream Job!
        </h1>
        {/* <p className="text-gray-500 mt-2 text-lg">Quick, simple, and effective path to your next career move.</p> */}
      </div>

      {/* Steps Container: Fully responsive flex layout, centered */}
      <div className="flex flex-col items-center md:flex-row md:justify-center max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="p-2 flex justify-center w-full md:w-auto">
            <StepCard
              icon={step.icon}
              title={step.title}
              description={step.description}
              color={step.color}
            />
          </div>
        ))}
      </div>

      {/* <div className="mt-16 text-center text-gray-400 text-xs"></div> */}
    </div>
  );
};

export default ThreeStepCard;
