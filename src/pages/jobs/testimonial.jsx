import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import image from "../../assets/image.jpg";

export default function Testimonial() {
  return (
    <>
      {/* Testimonials Section */}
      <main className=" bg-[#1A5276] text-[#FFFFFF] py-20 mb-15">
        <div className="max-w-7xl mx-auto px-6 md-2">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Side: Testimonial Text */}
            <div className="md:w-1/2 px-20 mb-10 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4 text-[#FFFFFF]">
                What our clients are saying
              </h3>
              <p className="text-[#FFFFFF] leading-relaxed mb-6">
                "I had the privilege of using Job Hunt to search for employment,
                and it exceeded my expectations. The platform's user-friendly
                features and the vast array of job listings made my job search a
                success. I endorse Job Hunt wholeheartedly."
              </p>
              <p className="font-bold text-[#FFFFFF]">Emmanuel Rice</p>
              <p className="text-gray-300 text-sm">Product Manager</p>
              <div className="flex items-center mt-8 space-x-2 justify-center">
                <button className="transition-colors hover:text-[#149AC5]">
                  <BsArrowLeftCircle className="text-3xl" />
                </button>
                <button className="transition-colors hover:text-[#149AC5]">
                  <BsArrowRightCircle className="text-3xl" />
                </button>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full bg-[#149AC5] rounded-lg transform translate-x-4 -translate-y-4"></div>
                <img
                  src={image}
                  alt="Emmanuel Rice"
                  className="relative rounded-lg w-80 h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
