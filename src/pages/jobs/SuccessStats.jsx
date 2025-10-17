// src/components/SuccessStats.jsx
import React from "react";

const SuccessStats = () => {
  // New Margin Left/Right: mx-[105px]
  // New Text Color: text-[#1A5276]
  // New Divider Color: bg-[#1A5276]
  return (
    <div className="mx-[170px] mt-10 mb-15">
      <div className="relative overflow-hidden md:py-20 rounded-xl text-center bg-gradient-to-tr from-[#a0dfff] via-[#a1dffe] to-[#afe4ff]
 ">
        {/* Subtle diagonal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-blue-50/40 opacity-70 z-0"></div>

        <div className="relative z-10 ">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A5276] mb-18">
            Journey of our Success
          </h2>
          <div className="grid w-full grid-cols-1 sm:grid-cols-3">
            {/* Effective Jobs */}
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold text-[#1A5276] md:text-5xl">
                168
              </p>
              {/* CHANGED: bg-blue-500 to bg-[#1A5276] */}
              <div className="w-16 h-1 mt-2 bg-[#1A5276] rounded-full md:w-20"></div>
              <p className="mt-2 text-sm font-medium text-[#1A5276] md:text-base">
                Our effective jobs
              </p>
            </div>

            {/* Potential Freelancer */}
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold text-[#1A5276] md:text-5xl">
                2.5K
              </p>
              {/* CHANGED: bg-blue-500 to bg-[#1A5276] */}
              <div className="w-16 h-1 mt-2 bg-[#1A5276] rounded-full md:w-20"></div>
              <p className="mt-2 text-sm font-medium text-[#1A5276] md:text-base">
                Potential freelancer
              </p>
            </div>

            {/* Standard Company */}
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold text-[#1A5276] md:text-5xl">
                95
              </p>
              {/* CHANGED: bg-blue-500 to bg-[#1A5276] */}
              <div className="w-16 h-1 mt-2 bg-[#1A5276] rounded-full md:w-20"></div>
              <p className="mt-2 text-sm font-medium text-[#1A5276] md:text-base">
                Standard company
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStats;
