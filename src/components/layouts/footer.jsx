import React from 'react';
import { MdMailOutline } from 'react-icons/md';
import { TiSocialFacebookCircular } from "react-icons/ti";
import { LiaTelegram } from "react-icons/lia";
import { AiOutlineYoutube } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 text-[#1A5276] font-Poppins">
      <div className="container mx-auto px-8">
        {/* Main Flex Container: Column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16">

          {/* Organized and Sponsored By */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Organized and Sponsored By</h4>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img src="ISTAD.png" alt="ISTAD" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Prepared By */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Prepared By</h4>
            <div className="w-32 h-auto sm:w-40">
              <img src="JOBCOLLAB.png" alt="JOBCOLLAB" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 text-center lg:text-left">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:underline hover:text-[#FF7A00]">Home</NavLink></li>
              <li><NavLink to="/jobs" className="hover:underline hover:text-[#FF7A00]">Find Jobs</NavLink></li>
              <li><NavLink to="/about" className="hover:underline hover:text-[#FF7A00]">About Us</NavLink></li>
              <li><NavLink to="/contact" className="hover:underline hover:text-[#FF7A00]">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Contact & Follow Us */}
          <div className="flex-1 flex flex-col lg:flex-row justify-between lg:space-x-8 w-full lg:w-auto">

            {/* Contact Us */}
            <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2 justify-center lg:justify-start">
                  <MdMailOutline className="text-xl flex-shrink-0 mt-0.5 hover:text-[#FF7A00]" />
                  <span className="text-left">info@jobcollap.com</span>
                </div>
                <div className="flex items-start space-x-2 justify-center lg:justify-start">
                  <GrLocation className="text-xl flex-shrink-0 mt-0.5 hover:text-[#FF7A00]" />
                  <address className="not-italic text-left mb-1">
                    <span className="block">#24, St.562, Boeung Kak,</span>
                    <span className="block">Toul Kork, Phnom Penh,</span>
                    <span className="block">Cambodia</span>
                  </address>
                </div>
              </div>
            </div>
            

            {/* Follow Us */}
            <div className="flex-1 text-center lg:text-right">
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex justify-center lg:justify-end space-x-2.5 text-2xl">
                <a href="#" aria-label="Facebook" className="transition-colors duration-300 hover:text-[#FF7A00]">
                  <TiSocialFacebookCircular />
                </a>
                <a href="#" aria-label="Telegram" className="transition-colors duration-300 hover:text-[#FF7A00]">
                  <LiaTelegram />
                </a>
                <a href="#" aria-label="YouTube" className="transition-colors duration-300 hover:text-[#FF7A00]">
                  <AiOutlineYoutube />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-4 border-t border-t-[#c4d4e3] text-[#1A5276]">
          <div className="text-center text-sm py-2">
            <p className="flex justify-center items-center space-x-1">
              <span className="text-xl">©</span>
              <span>2025 JobCollab. All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;