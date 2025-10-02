import { MdOutlineMail, MdOutlineLocationOn, MdOutlineLocationCity, MdOutlineLocationOff } from 'react-icons/md';
import { FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { TiSocialFacebookCircular } from "react-icons/ti";
import { LiaTelegram } from "react-icons/lia";
import { AiOutlineYoutube } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
// --- NEW IMPORT FOR ADDRESS ICON ---
import { MapPin } from 'lucide-react'; 
// ------------------------------------

const Footer = () => {
  // Define a color variable consistent with the lucide icon styling
  const ICON_COLOR = "text-[#3b5998]"; 
  const ACCENT_HOVER_COLOR = "hover:text-[#FF7A00]";

  return (
    <footer className="bg-[#EFF7FF] py-8 text-[#1A5276] font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">

          {/* Organized and sponsored By */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Organized and sponsored By</h4>
            <div className="w-30 h-30">
              <img src="ISTAD.png" alt="ISTAD" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Prepared By */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Prepared By</h4>
            <div className="w-40 h-auto">
              <img src="JOBCOLLAB.png" alt="JOBCOLLAB" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 text-center md:text-left">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Home</a></li>
              <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Find Jobs</a></li>
              <li><a href="#" className="hover:underline hover:text-[#FF7A00]">About Us</a></li>
              <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us & Follow Us Container */}
          <div className="flex-1 flex flex-col md:flex-row md:space-x-8 w-full md:w-auto">
            {/* Contact Us */}
         <div className="flex-1 text-center md:text-left min-w-[250px] mb-8 md:mb-0">
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-2">
              {/* Email Address */}
              <div className="flex items-start space-x-2"> 
                <MdMailOutline className={`text-xl flex-shrink-0 mt-1 ${ACCENT_HOVER_COLOR}`} /> 
                <span className="text-left">info@jobcollap.com</span> 
              </div>
              
              {/* Address section (UPDATED TO USE SELECTED LUCIDE/TAILWIND STYLES) */}
              <div className="flex items-start space-x-2 text-[#1A5276]">
                
                {/* Icon (MapPin from lucide-react) */}
                <MapPin className={`w-5 h-5 flex-shrink-0 mt-0.1 icon-[#1A5276] hover:text-[#FF7A00] {ICON_COLOR}`} /> 
                
                {/* Address text container */}
                <address className="not-italic text-left  mb-1">
                  <span className="block">#24, St.562, Boeung Kak,</span>
                  <span className="block">Toul Kork, Phnom Penh,</span>
                  <span className="block">Cambodia</span>
                </address>
              </div>
            </div>
          </div>


            {/* Follow Us */}
            <div className="flex-1 text-center">
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex justify-center space-x-2.5 text-2xl ">
                <a href="#" aria-label="Facebook" className={`hover:text-[#FF7A00] transition-colors duration-300 text-right `}>
                  <TiSocialFacebookCircular />
                </a>
                <a href="#" aria-label="Telegram" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
                  <LiaTelegram />
                </a>
                <a href="#" aria-label="YouTube" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
                  <AiOutlineYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
       {/* Copyright Section (Added from the image) */}
      <div className="mt-8 pt-4 border-t text-[#1A5276] bg-[#EFF7FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1A5276] text-sm py-2">
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











