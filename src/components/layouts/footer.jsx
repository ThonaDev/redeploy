import React from "react";
import { Mail, MapPin } from "lucide-react"; // Outline mail & map
import { FiFacebook, FiInstagram } from "react-icons/fi"; // Outline Facebook & Instagram
import { AiOutlineYoutube } from "react-icons/ai"; // Outline YouTube

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-[#1A5276] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        
        {/* Organized and Sponsored By */}
        <div>
          <h3 className="font-semibold mb-4">Organized & Sponsored By</h3>
          <img src="/ISTAD.png" alt="ISTAD" className="mx-auto md:mx-0 w-24 h-24 object-contain" />
        </div>

        {/* Prepared By */}
        <div>
          <h3 className="font-semibold mb-4">Prepared By</h3>
          <img src="/JOBCOLLAB.png" alt="JOBCOLLAB" className="mx-auto md:mx-0 w-32 object-contain" />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/jobs" className="hover:text-blue-600">Find Jobs</a></li>
            <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Us
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Mail size={18} />
            <a href="mailto:info@jobcollap.com" className="hover:text-blue-600">
              info@jobcollap.com
            </a>
          </div>
          <div className="flex items-center text-start justify-center md:justify-start gap-2 mb-2">
            <MapPin size={18} />
            <p className="text-sm">#24, St.562, Boeung Kak, Toul Kork, Phnom Penh, Cambodia
            </p>
          </div>
        </div> */}

        {/* Contact Us - EDITED CODE */}
<div>
  <h3 className="font-semibold mb-4">Contact Us</h3>
  <div className="flex flex-col gap-2"> {/* This single container stacks the lines vertically */}
    <div className="flex items-center justify-center md:justify-start gap-2">
      <Mail size={18} />
      <a href="mailto:info@jobcollap.com" className="hover:text-blue-600">
        info@jobcollap.com
      </a>
    </div>
    {/* Corrected: MapPin size and items-start removed */}
    <div className="flex items-center justify-center md:justify-start gap-2">
      <MapPin size={40}
       className="pb-2" />
      <p className="text-sm">
        #24, St.562, Boeung Kak, Toul Kork, Phnom Penh, Cambodia
      </p>
    </div>
  </div>
</div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            {/* Facebook with circle */}
            <a
              href="#"
              className="w-7 h-7 border text-[#1A5276] rounded-full flex items-center justify-center hover:text-[#1A5276]  transition"
            >
              <FiFacebook size={20} />
            </a>

            {/* Instagram */}
            <a href="#" className="w-7 h-7 hover:text-[#1A5276] transition flex items-center justify-center">
              <FiInstagram size={25} />
            </a>

            {/* YouTube */}
            <a href="#" className="w-7 h-7 hover:text-[#1A5276] transition flex items-center justify-center">
              <AiOutlineYoutube size={90} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-[#1A5276]">
        © 2025 JobCollap. All Rights Reserved.
      </div>
    </footer>
  );
}

