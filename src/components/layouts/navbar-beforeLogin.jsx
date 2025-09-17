import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
      <nav className="bg-white p-4 rounded-[20px] mx-auto px-12  max-w-7xl flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="src/images/Logo.jpg"
            alt="JOBCOLLAP Logo"
            className="h-10 md:h-12 mr-4 object-contain"
          />
        </div>

        {/* Desktop Navigation (lg+) */}
        <div className="hidden lg:flex space-x-8 text-gray-700 font-medium">
          <a href="#home" className="text-[#1A5276] hover:text-[#FF7A00] transition-colors">Home</a>
          <a href="#find-jobs" className="text-[#1A5276] hover:text-[#FF7A00] transition-colors">Find Jobs</a>
          <a href="#about-us" className="text-[#1A5276] hover:text-[#FF7A00] transition-colors">About Us</a>
          <a href="#contact-us" className="text-[#1A5276] hover:text-[#FF7A00] transition-colors">Contact Us</a>
        </div>

        {/* Desktop Search + Buttons (lg only) */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative flex items-center bg-[#f0f3f7] rounded-full px-4 py-2 hover:bg-gray-100 transition-colors">
            <FiSearch className="text-[#1A5276] mr-2" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-[#1A5276] placeholder-[#1A5276] w-32 lg:w-48"
            />
          </div>

          <div className="flex items-center space-x-2">
            <button className="h-10 text-[#1A5276] font-semibold px-4 rounded-full border border-[#1A5276] hover:bg-gray-100 transition-colors">
              Register
            </button>
            <button className="h-10 bg-[#1A5276] text-white font-semibold px-6 rounded-full hover:bg-[#153e5a] transition-colors">
              Login
            </button>
          </div>
        </div>

        {/* Hamburger (mobile + tablet) */}
        <button
          className="lg:hidden text-[#1A5276]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile/Tablet Dropdown */}
        {open && (
          <div className="absolute top-full mt-2 left-0 bg-white rounded-xl flex flex-col space-y-4 py-6 px-6 lg:hidden z-50 max-w-full">
            {/* Links */}
            <div className="flex flex-col space-y-2 text-gray-700 font-medium items-start w-full">
              <a
                href="#home"
                className="w-full py-2 rounded px-2 hover:bg-gray-100 transition-colors"
              >
                Home
              </a>
              <a
                href="#find-jobs"
                className="w-full py-2 rounded px-2 hover:bg-gray-100 transition-colors"
              >
                Find Jobs
              </a>
              <a
                href="#about-us"
                className="w-full py-2 rounded px-2 hover:bg-gray-100 transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact-us"
                className="w-full py-2 rounded px-2 hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Search */}
            <div className="relative flex items-center bg-[#f0f3f7] rounded-full px-4 py-2 mt-2 w-full max-w-xs mx-auto hover:bg-gray-100 transition-colors">
              <FiSearch className="text-[#1A5276] mr-2" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-[#1A5276] placeholder-[#1A5276] w-full"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-2 justify-center">
              <button className="h-10 text-[#1A5276] font-semibold px-4 rounded-full border border-[#1A5276] hover:bg-gray-100 transition-colors">
                Register
              </button>
              <button className="h-10 bg-[#1A5276] text-white font-semibold px-6 rounded-full hover:bg-[#153e5a] transition-colors">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
  );
};

export default Nav;
