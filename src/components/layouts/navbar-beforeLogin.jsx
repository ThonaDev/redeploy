import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Find Jobs", path: "/jobs" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white p-4 rounded-[20px] mx-auto px-12 max-w-7xl flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img
            src="src/assets/Logo.jpg"
            alt="JOBCOLLAP Logo"
            className="h-10 md:h-12 mr-4 object-contain"
          />
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-8 text-[#1A5276] font-medium">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-green-500 font-semibold hover:text-[#FF7A00] transition-colors"
                : "text-[#1A5276] hover:text-[#FF7A00] transition-colors"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Desktop Search + Buttons */}
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
          <NavLink
            to="/register"
            className="h-10 flex items-center justify-center text-[#1A5276] font-semibold px-4 rounded-full border hover:bg-blue-50 border-[#1A5276] hover:text-[#1A5276]  transition-colors"
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className="h-10 flex items-center justify-center bg-[#1A5276] text-white font-semibold px-6 rounded-full border border-transparent hover:bg-blue-50 hover:border-[#1A5276] hover:text-[#1A5276] transition-colors"
          >
            Login
          </NavLink>
        </div>
      </div>

      {/* Hamburger */}
      <button
        className="lg:hidden text-[#1A5276]"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full mt-2 left-0 bg-white rounded-xl flex flex-col space-y-4 py-6 px-6 lg:hidden z-50 w-full">
          <div className="flex flex-col space-y-2 text-[#1A5276] font-medium items-start w-full">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)} // close menu after click
                className={({ isActive }) =>
                  isActive
                    ? "w-full py-2 px-2 rounded text-green-500 hover:text-[#FF7A00] transition-colors"
                    : "w-full py-2 px-2 rounded text-[#1A5276] hover:text-[#FF7A00] transition-colors"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2">
            <FiSearch className="text-[#1A5276] mr-2" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-[#1A5276] placeholder-[#1A5276] w-32 lg:w-48"
            />
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-2 justify-center">
            <NavLink
              to="/register"
              className="h-10 flex items-center justify-center text-[#1A5276] font-semibold px-4 rounded-full border border-[#1A5276] hover:bg-blue-50 transition-colors"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="h-10 flex items-center justify-center bg-[#1A5276] text-white font-semibold px-6 rounded-full hover:bg-blue-50 border hover:border-[#1A5276] hover:text-[#1A5276] transition-colors"
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;