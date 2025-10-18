// src/components/SuccessStats.jsx
import React from "react";

const SuccessStats = () => {
  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-[105px] xl:mx-[170px] mt-10 mb-16">
      <div className="relative overflow-hidden py-12 sm:py-16 md:py-20 rounded-xl text-center bg-gradient-to-tr from-[#a0dfff] via-[#a1dffe] to-[#afe4ff]">
        {/* Subtle diagonal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-blue-50/40 opacity-70 z-0"></div>

        <div className="relative z-10 px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A5276] mb-10 sm:mb-14">
            Journey of our Success
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
            {/* Effective Jobs */}
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A5276]">
                168
              </p>
              <div className="w-14 sm:w-16 md:w-20 h-1 mt-2 bg-[#1A5276] rounded-full"></div>
              <p className="mt-2 text-sm sm:text-base font-medium text-[#1A5276]">
                Our effective jobs
              </p>
            </div>

            {/* Potential Freelancer */}
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A5276]">
                2.5K
              </p>
              <div className="w-14 sm:w-16 md:w-20 h-1 mt-2 bg-[#1A5276] rounded-full"></div>
              <p className="mt-2 text-sm sm:text-base font-medium text-[#1A5276]">
                Potential freelancer
              </p>
            </div>

            {/* Standard Company */}
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A5276]">
                95
              </p>
              <div className="w-14 sm:w-16 md:w-20 h-1 mt-2 bg-[#1A5276] rounded-full"></div>
              <p className="mt-2 text-sm sm:text-base font-medium text-[#1A5276]">
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
