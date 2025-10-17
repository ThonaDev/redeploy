import React from "react";
import { FaUser, FaFileAlt, FaPaperPlane } from "react-icons/fa";

// Single Step Card
const StepCard = ({ icon: Icon, title, description, color }) => (
  <div
    className={`flex flex-col items-center justify-center p-6 w-full sm:w-[260px] md:w-[280px] lg:w-[300px] h-[157px] rounded-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer ${color}`}
  >
    <Icon className="text-white mb-4" size={40} />
    <p className="text-white text-base md:text-lg font-medium text-center">
      {title}
    </p>
    {description && (
      <p className="text-white text-xs md:text-sm text-center mt-1">
        {description}
      </p>
    )}
  </div>
);

// Main Component
const ThreeStepCard = () => {
  const steps = [
    {
      icon: FaUser,
      title: "Register for an account",
      color: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      icon: FaFileAlt,
      title: "Upload Your CV",
      color: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      icon: FaPaperPlane,
      title: "Apply For Dream Job!",
      color: "bg-cyan-600 hover:bg-cyan-700",
    },
  ];

  return (
    <section className="font-Poppins mt-200 sm:mt-170 xl:mt-180 2xl:mt-170 mb-11 px-4">
      {/* Title */}
      <div className="flex flex-wrap justify-center mb-10">
        <h1 className="text-center text-3xl sm:text-3xl md:text-[32px] font-semibold text-[#1A5276]">
          Only 3 Steps to Get Your Dream Job!
        </h1>
      </div>

      {/* Cards container */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            color={step.color}
          />
        ))}
      </div>
    </section>
  );
};

export default ThreeStepCard;
