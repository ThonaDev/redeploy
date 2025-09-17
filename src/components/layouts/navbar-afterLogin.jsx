import React, { useState } from "react";
import { FiSearch, FiMoon, FiUser, FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "Find Jobs", "About Us", "Contact Us"];

  return (
    <nav className="bg-white p-4 rounded-[20px] mx-auto px-12  max-w-7xl flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <a href="#">
          <img
            src="src/assets/Logo.jpg"
            alt="JOBCOLLAP Logo"
            className="h-10 md:h-12 mr-4 object-contain"
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-8 text-gray-700 font-medium">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
            className="text-[#1A5276] hover:text-[#FF7A00] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Desktop Search + Icons */}
      <div className="hidden lg:flex items-center space-x-6">
        <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2">
          <FiSearch className="text-[#1A5276] mr-2" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-[#1A5276] placeholder-[#1A5276] w-32 lg:w-48"
          />
        </div>
        <div className="flex items-center space-x-4 text-[#1A5276]">
          <button
            aria-label="Toggle dark mode"
            className="p-2 hover:bg-gray-100 rounded-full hover:text-[#FF7A00] transition-colors"
          >
            <FiMoon size={24} />
          </button>
          <button
            aria-label="User profile"
            className="p-2 hover:bg-gray-100 rounded-full hover:text-[#FF7A00] transition-colors"
          >
            <FiUser size={24} />
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
        <div className="absolute top-full mt-2 left-0 bg-white rounded-[20px] flex flex-col space-y-2 py-4 px-6 lg:hidden w-auto shadow-none">
          {/* Links */}
          <div className="flex flex-col space-y-2 text-[#1A5276] font-medium items-start">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="w-full py-2 rounded transition-colors hover:bg-gray-100 hover:text-[#FF7A00] px-2"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 mt-2 w-full">
            <FiSearch className="text-[#1A5276] mr-2" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-[#1A5276] placeholder-[#1A5276] w-full"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 mt-2 text-[#1A5276]">
            <button
              aria-label="Toggle dark mode"
              className="p-2 hover:bg-gray-100 rounded-full hover:text-[#FF7A00] transition-colors"
            >
              <FiMoon size={24} />
            </button>
            <button
              aria-label="User profile"
              className="p-2 hover:bg-gray-100 rounded-full hover:text-[#FF7A00] transition-colors"
            >
              <FiUser size={24} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
