import React from "react";
import { MdVerified, MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { freelancers } from "./freelancers";

// Tag colors
const tagColors = {
  Web: "bg-green-50 text-green-600",
  Mobile: "bg-red-50 text-red-500",
  PHP: "bg-blue-50 text-blue-600",
  Figma: "bg-purple-50 text-purple-600",
  Wireframing: "bg-pink-50 text-pink-500",
};

// Reusable Freelancer Card
const BestFreelancerCard = ({ freelancer }) => {
  if (!freelancer) {
    console.warn("⚠️ Missing freelancer data for BestFreelancerCard");
    return null;
  }

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-center max-w-7xl hover:ring-1 hover:ring-[#1A5276]/50 hover:ring-offset-2 transition-all duration-300 ease-in-out">
      {/* Left Side: Avatar + Button */}
      <div className="flex flex-col items-center w-full sm:w-32 mb-4 sm:mb-0">
        <img
          src={freelancer.avatar}
          alt={freelancer.name}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-3 sm:mb-4"
        />
        <NavLink
          to={`/freelancer/${freelancer.id}`}
          aria-label={`View profile of ${freelancer.name}`}
          className="cursor-pointer bg-gray-50 text-gray-700 font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
        >
          View Profile
        </NavLink>
      </div>

      {/* Right Side: Content */}
      <div className="flex-1 sm:ml-6 w-full sm:w-auto text-center sm:text-left">
        {/* Role Badge */}
        <span
          className={`inline-block text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full ${
            freelancer.roleColor || "bg-violet-100 text-violet-800"
          }`}
        >
          {freelancer.role}
        </span>

        {/* Name + Verified */}
        <div className="flex items-center justify-center sm:justify-start mt-3 space-x-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {freelancer.name}
          </h3>
          {freelancer.verified && (
            <MdVerified className="text-blue-500 text-base sm:text-lg" />
          )}
        </div>

        {/* Rate + Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-gray-600 mt-2 sm:mt-1 space-y-1 sm:space-y-0 sm:space-x-4">
          <p className="font-medium text-sm sm:text-base">${freelancer.rate.toFixed(2)}/hr</p>
          <div className="flex items-center text-gray-500 text-sm sm:text-base">
            <MdLocationOn className="mr-1" />
            <span>{freelancer.location}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3 sm:mt-4">
          {freelancer.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full ${
                tagColors[tag] || "bg-gray-50 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component to Render All Cards
export default function BestFreelancers() {
  return (
    <section className="mb-12 sm:mb-15">
      <header className="text-center mb-8 sm:mb-12 px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#1A5276]">
          Our Best Freelancers
        </h1>
      </header>
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:max-w-lg lg:max-w-5xl lg:grid-cols-2 gap-4 sm:gap-6 font-poppins">
        {freelancers.map((freelancer) => (
          <BestFreelancerCard key={freelancer.id} freelancer={freelancer} />
        ))}
      </div>
    </section>
  );
}