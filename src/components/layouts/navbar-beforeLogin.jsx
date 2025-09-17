import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Nav = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen pt-20">
      <nav className="bg-white p-4 rounded-[20px] mx-auto px-12 mt-4 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="src/images/Logo.jpg"
            alt="JOBCOLLAP Logo"
            className="h-6 md:h-8 mr-4 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#home" className="text-[#1A5276] hover:text-[#FF7A00] transition-colors duration-300">Home</a>
          <a href="#find-jobs" className="text-[#1A5276] hover:text-[#FF7A00] transition-colors duration-300">Find Jobs</a>
          <a href="#about-us" className="text-[#1A5276] hover:text-[#FF7A00] transition-colors duration-300">About Us</a>
          <a href="#contact-us" className="text-[#1A5276] hover:text-[#FF7A00] transition-colors duration-300">Contact Us</a>
        </div>

        {/* Search Bar and Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative flex items-center bg-[#f0f3f7] rounded-full px-4 py-2">
            <FiSearch className="text-[#1A5276] mr-2" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-[#1A5276] placeholder-[#1A5276] w-32 md:w-48"
            />
          </div>

          {/* Register and Login Buttons */}
          <div className="flex items-center space-x-2">
            <button className="text-[#1A5276] font-semibold py-2 px-4 rounded-full border border-[#1A5276] hover:bg-gray-100 transition-colors duration-300">
              Register
            </button>
            <button className="bg-[#1A5276] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#153e5a] transition-colors duration-300">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
