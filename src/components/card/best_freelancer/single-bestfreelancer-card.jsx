import React from "react";
import { MdVerified, MdLocationOn } from "react-icons/md";

import Thona from "../../../assets/Thona.jpg";
import Sunnich from "../../../assets/Sunnich.jpg";
import { id } from "zod/v4/locales";
import { NavLink } from "react-router";

// ✅ Freelancer data
const freelancers = [
  {
    id: 1,
    name: "Ben Thona",
    role: "Full-Stack Developer",
    rate: 190,
    location: "Phnom Penh, PP",
    tags: ["Web", "Mobile", "PHP"],
    avatar: Thona,
    verified: true,
    roleColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    name: "Phorn Sunnich",
    role: "Product Designer",
    rate: 170,
    location: "Phnom Penh, PP",
    tags: ["Web", "Figma", "Wireframing"],
    avatar: Sunnich,
    verified: true,
    roleColor: "bg-purple-100 text-purple-800",
  },
];

// ✅ Tag colors
const tagColors = {
  Web: "bg-green-50 text-green-600",
  Mobile: "bg-red-50 text-red-500",
  PHP: "bg-blue-50 text-blue-600",
  Figma: "bg-purple-50 text-purple-600",
  Wireframing: "bg-pink-50 text-pink-500",
};

// ✅ Reusable Freelancer Card (with safety check)
const BestFreelancerCard = ({ freelancer }) => {
  if (!freelancer) {
    console.warn("⚠️ Missing freelancer data for BestFreelancerCard");
    return null;
  }

  return (
    <div className="bg-white rounded-2xl p-8 flex items-center max-w-7xl hover:ring-1 hover:ring-[#1A5276]/50 hover:ring-offset-2 transition-all duration-300 ease-in-out ">
      {/* Left Side: Avatar + Button */}
      <div className="flex flex-col items-center w-32">
        <img
          src={freelancer.avatar}
          alt={freelancer.name}
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <NavLink to={`/freelancer/${id}`} className="cursor-pointer bg-gray-50 text-gray-700 font-medium px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors">
          View Profile
        </NavLink>
      </div>

      {/* Right Side: Content */}
      <div className="flex-1 ml-6">
        {/* Role Badge */}
        <span
          className={`text-sm font-medium px-4 py-1.5 rounded-full ${
            freelancer.roleColor || "bg-violet-100 text-violet-800"
          }`}
        >
          {freelancer.role}
        </span>

        {/* Name + Verified */}
        <div className="flex items-center mt-3 space-x-2">
          <h3 className="text-xl font-semibold text-gray-900">
            {freelancer.name}
          </h3>
          {freelancer.verified && (
            <MdVerified className="text-blue-500 text-lg" />
          )}
        </div>

        {/* Rate + Location */}
        <div className="flex items-center text-gray-600 mt-1 space-x-4">
          <p className="font-medium">${freelancer.rate.toFixed(2)}/hr</p>
          <div className="flex items-center text-gray-500">
            <MdLocationOn className="mr-1" />
            <span>{freelancer.location}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {freelancer.tags.map((tag) => (
            <span
              key={tag}
              className={`text-sm px-4 py-1 rounded-full ${
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

// ✅ Main Component to Render All Cards
export default function BestFreelancers() {
  return (
    <section className="mb-15">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-[32px] font-semibold text-[#1A5276]">
          Our best freelancer
        </h1>
      </header>
      <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-2 gap-6 font-poppins ">
        {freelancers.map((freelancer, index) => (
          <BestFreelancerCard key={index} freelancer={freelancer} />
        ))}
      </div>
    </section>
  );
}
