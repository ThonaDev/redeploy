import React from "react";
import { FiBriefcase, FiMapPin, FiUsers, FiClock } from "react-icons/fi";

const benefitsData = [
  {
    icon: () => (
      <div className="relative">
        <FiBriefcase className="w-6 h-6" />
        <FiClock className="w-3 h-3 absolute -top-1 -right-1 fill-current stroke-2" />
      </div>
    ),
    title: "Work-Life Balance",
    description:
      "Many remote jobs also come with flexible schedules, which means that workers can start and end their day as they want to choose.",
    color: "bg-[#f0f7ff]",
    iconColor: "text-blue-500",
  },
  {
    icon: () => (
      <div className="relative">
        <FiMapPin className="w-6 h-6" />
        <FiClock className="w-3 h-3 absolute -top-1 -right-1 fill-current stroke-2" />
      </div>
    ),
    title: "Work Anywhere",
    description:
      "Having access to a broader range of job opportunities that aren't limited by geographic location. This can be especially helpful.",
    color: "bg-[#fff8f0]",
    iconColor: "text-orange-500",
  },
  {
    icon: FiUsers,
    title: "Improved Inclusivity",
    description:
      "Remote work enables companies to embrace diversity and inclusion by hiring people from a wide variety of different cultural backgrounds.",
    color: "bg-[#fff0f5]",
    iconColor: "text-pink-600",
  },
];

// Responsive Benefit Card
const BenefitCard = ({ icon: Icon, title, description, color, iconColor }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 w-full sm:w-[300px] md:w-[340px] lg:w-[373px] h-auto flex flex-col justify-between transition duration-300 text-[#1A5276] hover:shadow-md">
    <div className="flex items-center mb-3">
      <div className={`p-3 rounded-lg mr-4 ${color} ${iconColor}`}>
        {Icon.name === "FiUsers" ? <Icon className="w-6 h-6" /> : <Icon />}
      </div>
      <h2 className="text-lg font-bold text-[#1A5276] leading-snug">
        {title}
      </h2>
    </div>

    <p className="text-[#1A5276] text-sm md:text-[0.95rem] leading-relaxed text-left">
      {description}
    </p>
  </div>
);

// Main Component
const BenefitsData = () => {
  return (
    <section className="font-Poppins mt-12 mb-15 px-4">
      {/* Title */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-[32px] font-semibold text-[#1A5276]">
          Your Benefit
        </h1>
      </header>

      {/* Cards Container */}
      <main className="flex flex-wrap justify-center items-stretch gap-6 mx-auto">
        {benefitsData.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            color={benefit.color}
            iconColor={benefit.iconColor}
          />
        ))}
      </main>
    </section>
  );
};

export default BenefitsData;
