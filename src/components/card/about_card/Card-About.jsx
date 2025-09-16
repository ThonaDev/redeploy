import React from "react";

export function AboutCard({ name, position, imgSrc, imgAlt }) {
  return (
    <div className="relative w-64 h-80 rounded-2xl overflow-hidden group cursor-pointer">
      {/* Background image */}
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full h-full object-cover transition duration-300 group-hover:opacity-95"
      />

      {/* Gradient overlay behind text */}
      <div className="absolute inset-0 flex flex-col justify-end p-2">
        {/* Full-width gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Text on top */}
        <h5 className="relative text-white text-xl font-semibold font-poppins z-10 transition-colors duration-300 group-hover:text-[#1A5276]">
          {name}
        </h5>
        <p className="relative text-gray-200 text-xs font-poppins z-10 transition-colors duration-300 group-hover:text-[#FF7A00]">
          {position}
        </p>
      </div>
    </div>
  );
}