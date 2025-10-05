// import { MdOutlineMail, MdOutlineLocationOn, MdOutlineLocationCity, MdOutlineLocationOff } from 'react-icons/md';
// import { FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
// import { TiSocialFacebookCircular } from "react-icons/ti";
// import { LiaTelegram } from "react-icons/lia";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { GrLocation } from "react-icons/gr";
// import { MdMailOutline } from "react-icons/md";
// // --- NEW IMPORT FOR ADDRESS ICON ---
// import { MapPin } from 'lucide-react'; 
// // ------------------------------------

// const Footer = () => {
//   // Define a color variable consistent with the lucide icon styling
//   const ICON_COLOR = "text-[#3b5998]"; 
//   const ACCENT_HOVER_COLOR = "hover:text-[#FF7A00]";

//   return (
//     <footer className="bg-[#EFF7FF] py-8 text-[#1A5276] font-sans">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">

//           {/* Organized and sponsored By */}
//           <div className="flex-1 flex flex-col items-center text-center">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Organized and sponsored By</h4>
//             <div className="w-30 h-30">
//               <img src="ISTAD.png" alt="ISTAD" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* Prepared By */}
//           <div className="flex-1 flex flex-col items-center text-center">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Prepared By</h4>
//             <div className="w-40 h-auto">
//               <img src="JOBCOLLAB.png" alt="JOBCOLLAB" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="flex-1 text-center md:text-left">
//             <h4 className="font-bold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Home</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Find Jobs</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">About Us</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Contact Us & Follow Us Container */}
//           <div className="flex-1 flex flex-col md:flex-row md:space-x-8 w-full md:w-auto">
//             {/* Contact Us */}
//          <div className="flex-1 text-center md:text-left min-w-[250px] mb-8 md:mb-0">
//             <h4 className="font-bold text-lg mb-4">Contact Us</h4>
//             <div className="flex flex-col space-y-2">
//               {/* Email Address */}
//               <div className="flex items-start space-x-2"> 
//                 <MdMailOutline className={`text-xl flex-shrink-0 mt-1 ${ACCENT_HOVER_COLOR}`} /> 
//                 <span className="text-left">info@jobcollap.com</span> 
//               </div>
//               
//               {/* Address section (UPDATED TO USE SELECTED LUCIDE/TAILWIND STYLES) */}
//               <div className="flex items-start space-x-2 text-[#1A5276]">
//                 
//                 {/* Icon (MapPin from lucide-react) */}
//                 <MapPin className={`w-5 h-5 flex-shrink-0 mt-0.1 icon-[#1A5276] hover:text-[#FF7A00] {ICON_COLOR}`} /> 
//                 
//                 {/* Address text container */}
//                 <address className="not-italic text-left  mb-1">
//                   <span className="block">#24, St.562, Boeung Kak,</span>
//                   <span className="block">Toul Kork, Phnom Penh,</span>
//                   <span className="block">Cambodia</span>
//                 </address>
//               </div>
//             </div>
//           </div>


// //             {/* Follow Us */}
// //             <div className="flex-1 text-center">
// //               <h4 className="font-bold text-lg mb-4">Follow Us</h4>
// //               <div className="flex justify-center space-x-2.5 text-2xl ">
// //                 <a href="#" aria-label="Facebook" className={`hover:text-[#FF7A00] transition-colors duration-300 text-right `}>
// //                   <TiSocialFacebookCircular />
// //                 </a>
// //                 <a href="#" aria-label="Telegram" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
// //                   <LiaTelegram />
// //                 </a>
// //                 <a href="#" aria-label="YouTube" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
// //                   <AiOutlineYoutube />
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //        {/* Copyright Section (Added from the image) */}
// //       <div className="mt-8 pt-4 border-t text-[#1A5276] bg-[#EFF7FF]">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1A5276] text-sm py-2">
// //           <p className="flex justify-center items-center space-x-1">
// //             <span className="text-xl">©</span>
// //             <span>2025 JobCollab. All rights reserved.</span>
// //           </p>
// //         </div>
// //       </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;











// import { MdOutlineMail, MdOutlineLocationOn, MdOutlineLocationCity, MdOutlineLocationOff } from 'react-icons/md';
// import { FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
// import { TiSocialFacebookCircular } from "react-icons/ti";
// import { LiaTelegram } from "react-icons/lia";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { GrLocation } from "react-icons/gr";
// import { MdMailOutline } from "react-icons/md";
// // --- NEW IMPORT FOR ADDRESS ICON ---
// import { MapPin } from 'lucide-react'; 
// //------------------------------------

// const Footer = () => {
//   // Define a color variable consistent with the lucide icon styling
//   const ICON_COLOR = "text-[#3b5998]"; 
//   const ACCENT_HOVER_COLOR = "hover:text-[#FF7A00]";

//   return (
//     <footer className="bg-[#EFF7FF] py-8 text-[#1A5276] font-sans">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">

//         {/* Organized and sponsored By */}
//            <div className="flex-1 flex flex-col items-center text-center">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Organized and sponsored By</h4>
//              <div className="w-30 h-30">
//               <img src="ISTAD.png" alt="ISTAD" className="w-full h-full object-contain" />
//            </div>
//           </div>

//           {/* Prepared By */}
//            <div className="flex-1 flex flex-col items-center text-center">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Prepared By</h4>
//              <div className="w-40 h-auto">
//                <img src="JOBCOLLAB.png" alt="JOBCOLLAB" className="w-full h-full object-contain" />
//              </div>
//            </div>

//            {/* Quick Links */}
//            <div className="flex-1 text-center md:text-left">
//              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
//              <ul className="space-y-2">
//                <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Home</a></li>
//                <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Find Jobs</a></li>
//                <li><a href="#" className="hover:underline hover:text-[#FF7A00]">About Us</a></li>
//                <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Contact Us</a></li>
//              </ul>
//            </div>
//            {/* Contact Us & Follow Us Container */}
//           <div className="flex-1 flex flex-col md:flex-row md:space-x-8 w-full md:w-auto">
//             {/* Contact Us */}
//    <div className="flex-1 text-center md:text-left min-w-[250px] mb-8 md:mb-0">
//             <h4 className="font-bold text-lg mb-4">Contact Us</h4>
//              <div className="flex flex-col space-y-2">
//                {/* Email Address */}
//               <div className="flex items-start space-x-2"> 
//                 <MdMailOutline className={`text-xl flex-shrink-0 mt-1 ${ACCENT_HOVER_COLOR}`} /> 
//                 <span className="text-left">info@jobcollap.com</span> 
//               </div>
//               
//               {/* Address section (UPDATED TO USE SELECTED LUCIDE/TAILWIND STYLES) */}
//               <div className="flex items-start space-x-2 text-[#1A5276]">
//                 
//                 {/* Icon (MapPin from lucide-react) */}
//                 <MapPin className={`w-5 h-5 flex-shrink-0 mt-0.1 icon-[#1A5276] hover:text-[#FF7A00] {ICON_COLOR}`} /> 
//                 
//                 {/* Address text container */}
//                 <address className="not-italic text-left  mb-1">
//                   <span className="block">#24, St.562, Boeung Kak,</span>
//                   <span className="block">Toul Kork, Phnom Penh,</span>
//                   <span className="block">Cambodia</span>
//                 </address>
//               </div>
//             </div>
//           </div>


//             {/* Follow Us */}
//            <div className="flex-1 text-center">
//               <h4 className="font-bold text-lg mb-4">Follow Us</h4>
//               {/* Added text-3xl for better visibility on all devices */}
//               <div className="flex justify-center sm:justify-center space-x-2.5 text-3xl">
//                 <a href="#" aria-label="Facebook" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <TiSocialFacebookCircular />
//                 </a>
//                 <a href="#" aria-label="Telegram" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <LiaTelegram />
//                 </a>
//                 <a href="#" aria-label="YouTube" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <AiOutlineYoutube />
//                 </a>
//               </div>
//             </div>
//         </div>
//          </div>
//         {/* Copyright Section (Added from the image) */}
//       <div className="mt-8 pt-4 border-t text-[#1A5276] bg-[#EFF7FF]">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1A5276] text-sm py-2">
//           <p className="flex justify-center items-center space-x-1">
//            <span className="text-xl">©</span>
//            <span>2025 JobCollab. All rights reserved.</span>
//         </p>
//         </div>
//       </div>
//        </div>
//     </footer>
//   );
// };

// export default Footer;










//Testing of this code 
// import React from 'react';
// // Replaced react-icons imports (MdMailOutline, TiSocialFacebookCircular, LiaTelegram, AiOutlineYoutube)
// // with equivalent icons from lucide-react to resolve compilation errors.
// import { MapPin, Mail, Facebook, Send, Youtube } from 'lucide-react';

// const Footer = () => {
//   // Define a color variable consistent with the lucide icon styling
//   const ICON_COLOR = "text-[#3b5998]"; 
//   const ACCENT_HOVER_COLOR = "hover:text-[#FF7A00]";

//   return (
//     <footer className="bg-[#EFF7FF] py-8 text-[#1A5276] font-sans">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/*
//           This section handles the core responsiveness: 
//           flex-col for mobile, md:flex-row for tablets/desktop.
//         */}
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">

//           {/* Organized and sponsored By (Flex-1 ensures equal width on desktop) */}
//           <div className="flex-1 flex flex-col items-center text-center">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Organized and sponsored By</h4>
//             <div className="w-30 h-30">
//               <img src="ISTAD.png" alt="ISTAD" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* Prepared By (Flex-1 ensures equal width on desktop) */}
//           <div className="flex-1 flex flex-col items-center text-center">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Prepared By</h4>
//             <div className="w-40 h-auto">
//               <img src="JOBCOLLAB.png" alt="JOBCOLLAB" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* Quick Links (Flex-1 ensures equal width on desktop) */}
//           <div className="flex-1 text-center md:text-left">
//             <h4 className="font-bold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Home</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Find Jobs</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">About Us</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Contact Us & Follow Us Container */}
//           <div className="flex-1 flex flex-col md:flex-row md:space-x-8 w-full md:w-auto">
//             {/* Contact Us */}
//             <div className="flex-1 text-center md:text-left min-w-[250px] mb-8 md:mb-0">
//               <h4 className="font-bold text-lg mb-4">Contact Us</h4>
//               <div className="flex flex-col space-y-2">
//                 {/* Email Address - Using Mail icon (lucide-react) */}
//                 <div className="flex items-start justify-center md:justify-start space-x-2"> 
//                   <Mail className={`w-5 h-5 flex-shrink-0 mt-1 ${ACCENT_HOVER_COLOR}`} /> 
//                   <span className="text-left">info@jobcollap.com</span> 
//                 </div>
//                 
//                 {/* Address section - Using MapPin icon (lucide-react) */}
//                 <div className="flex items-start justify-center md:justify-start space-x-2 text-[#1A5276]">
//                   
//                   {/* Icon (MapPin from lucide-react) */}
//                   <MapPin className={`w-5 h-5 flex-shrink-0 text-[#1A5276] hover:text-[#FF7A00]`} /> 
//                   
//                   {/* Address text container */}
//                   <address className="not-italic text-left  mb-1">
//                     <span className="block">#24, St.562, Boeung Kak,</span>
//                     <span className="block">Toul Kork, Phnom Penh,</span>
//                     <span className="block">Cambodia</span>
//                   </address>
//                 </div>
//               </div>
//             </div>


//             {/* Follow Us */}
//             <div className="flex-1 text-center">
//               <h4 className="font-bold text-lg mb-4">Follow Us</h4>
//               {/* The text-2xl class was removed from the parent div and applied to the icons directly using w-6 h-6 */}
//               <div className="flex justify-center space-x-2.5">
//                 {/* Facebook - Using Facebook icon (lucide-react) */}
//                 <a href="#" aria-label="Facebook" className={`hover:text-[#FF7A00] transition-colors duration-300 text-right `}>
//                   <Facebook className="w-6 h-6" />
//                 </a>
//                 {/* Telegram - Using Send icon (lucide-react) for a paper-plane look */}
//                 <a href="#" aria-label="Telegram" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <Send className="w-6 h-6" />
//                 </a>
//                 {/* YouTube - Using Youtube icon (lucide-react) */}
//                 <a href="#" aria-label="YouTube" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <Youtube className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//        {/* Copyright Section */}
//       <div className="mt-8 pt-4 border-t text-[#1A5276] bg-[#EFF7FF]">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1A5276] text-sm py-2">
//           <p className="flex justify-center items-center space-x-1">
//             <span className="text-xl">©</span>
//             <span>2025 JobCollab. All rights reserved.</span>
//           </p>
//         </div>
//       </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








// import { MdOutlineMail, MdOutlineLocationOn, MdOutlineLocationCity, MdOutlineLocationOff } from 'react-icons/md';
// import { FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
// import { TiSocialFacebookCircular } from "react-icons/ti";
// import { LiaTelegram } from "react-icons/lia";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { GrLocation } from "react-icons/gr";
// import { MdMailOutline } from "react-icons/md";
// // --- NEW IMPORT FOR ADDRESS ICON ---
// import { MapPin } from 'lucide-react'; 
// //------------------------------------

// const Footer = () => {
//   // Define a color variable consistent with the lucide icon styling
//   const ICON_COLOR = "text-[#3b5998]"; 
//   const ACCENT_HOVER_COLOR = "hover:text-[#FF7A00]";

//   return (
//     <footer className="bg-[#EFF7FF] py-8 text-[#1A5276] font-sans">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/*
//           MAIN CONTENT CONTAINER:
//           The original structure (flex-col md:flex-row) is re-established but with better control for intermediate screens:
//           - Phone (default): Stacks vertically (flex-col)
//           - Tablet (sm:): Uses a grid for a 2x2 layout, aligning content to the left side of each grid cell.
//           - Desktop (md:): Reverts to flex-row with flex-1 on columns for equal width.
//         */}
//         <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-10 md:flex md:flex-row justify-between items-start md:space-x-8 lg:space-x-16">

//           {/* 1. Organized and sponsored By (Left-aligned column) */}
//           {/* Note: items-start/text-left is essential to match the image style */}
//           <div className="flex-1 flex flex-col items-start text-left">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Organized and sponsored By</h4>
//             {/* Logo container size adjusted for responsiveness and to fit left alignment */}
//             <div className="w-24 h-24 sm:w-32 sm:h-32">
//               <img src="ISTAD.png" alt="ISTAD" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* 2. Prepared By (Left-aligned column) */}
//           <div className="flex-1 flex flex-col items-start text-left">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Prepared By</h4>
//             {/* Logo container size adjusted for responsiveness and to fit left alignment */}
//             <div className="w-32 h-auto sm:w-40 sm:h-auto">
//               <img src="JOBCOLLAB.png" alt="JOBCOLLAB" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* 3. Quick Links (Left-aligned column) */}
//           <div className="flex-1 text-left">
//             <h4 className="font-bold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Home</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Find Jobs</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">About Us</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Contact Us</a></li>
//             </ul>
//           </div>
          
//           {/* 4. Contact Us & Follow Us Container (This is one column containing two sections) */}
//           {/* We use flex-col for stacking Contact Us and Follow Us vertically within this single column */}
//           <div className="flex-1 flex flex-col w-full md:w-auto">
            
//             {/* Contact Us Sub-section (Left-aligned) */}
//             <div className="text-left mb-8">
//               <h4 className="font-bold text-lg mb-4">Contact Us</h4>
//               {/* items-start ensures text wraps from the left */}
//               <div className="flex flex-col space-y-2 items-start">
                
//                 {/* Email Address */}
//                 <div className="flex items-start space-x-2"> 
//                   <MdMailOutline className={`text-xl flex-shrink-0 mt-1 ${ACCENT_HOVER_COLOR}`} /> 
//                   <span className="text-left">info@jobcollap.com</span> 
//                 </div>
                
//                 {/* Address section */}
//                 <div className="flex items-start space-x-2 text-[#1A5276]">
//                   {/* Icon (MapPin from lucide-react) */}
//                   <MapPin className={`w-5 h-5 flex-shrink-0 mt-0.1 icon-[#1A5276] hover:text-[#FF7A00] {ICON_COLOR}`} /> 
                  
//                   {/* Address text container */}
//                   <address className="not-italic text-left mb-1">
//                     <span className="block">#24, St.562, Boeung Kak,</span>
//                     <span className="block">Toul Kork, Phnom Penh,</span>
//                     <span className="block">Cambodia</span>
//                   </address>
//                 </div>
//               </div>
//             </div>

//             {/* Follow Us Sub-section (Left-aligned) */}
//             <div className="text-left">
//               <h4 className="font-bold text-lg mb-4">Follow Us</h4>
//               {/* justify-start aligns icons to the left */}
//               <div className="flex justify-start space-x-2.5 text-2xl"> 
//                 <a href="#" aria-label="Facebook" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <TiSocialFacebookCircular />
//                 </a>
//                 <a href="#" aria-label="Telegram" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <LiaTelegram />
//                 </a>
//                 <a href="#" aria-label="YouTube" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <AiOutlineYoutube />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Horizontal Divider and Copyright */}
//         {/* Adjusted mt/pt to match the image spacing */}
//         <div className="mt-8 pt-4 border-t border-[#1A5276]/20">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1A5276] text-sm py-2">
//             <p className="flex justify-center items-center space-x-1">
//               <span className="text-xl">©</span>
//               <span>2025 JobCollab. All rights reserved.</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

















// import React from 'react';
// // Icons that closely match the thick, rounded outline style from the images
// import { MdMailOutline } from 'react-icons/md';
// import { GrLocation } from 'react-icons/gr'; 
// import { TiSocialFacebookCircular } from "react-icons/ti"; 
// import { LiaTelegram } from "react-icons/lia";             
// import { AiOutlineYoutube } from "react-icons/ai";         

// const Footer = () => {
//   // Define a color variable consistent with the theme
//   const ACCENT_HOVER_COLOR = "hover:text-[#FF7A00]";

//   return (
//     <footer className="bg-[#EFF7FF] py-8 text-[#1A5276] font-sans">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/*
//           MAIN CONTENT CONTAINER (Restored Original Structure with Alignment Fixes):
//           - flex-col: Stacks vertically on Mobile/Tablet (default)
//           - md:flex-row: Displays in a single row on Desktop (md breakpoint and up)
//           - Alignment Fix: Changed items-center to items-start on logo columns for desktop view.
//         */}
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">

//           {/* 1. Organized and sponsored By */}
//           {/* FIX: Ensure content aligns to the start/left on desktop, matching the image. */}
//           <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"> 
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Organized and sponsored By</h4>
//             <div className="w-24 h-24 sm:w-32 sm:h-32"> 
//               <img src="ISTAD.png" alt="ISTAD" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* 2. Prepared By */}
//           {/* FIX: Ensure content aligns to the start/left on desktop, matching the image. */}
//           <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"> 
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Prepared By</h4>
//             <div className="w-32 h-auto sm:w-40 sm:h-auto"> 
//               <img src="JOBCOLLAB.png" alt="JOBCOLLAB" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* 3. Quick Links (This was mostly correct) */}
//           <div className="flex-1 text-center md:text-left">
//             <h4 className="font-bold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Home</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Find Jobs</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">About Us</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Contact Us</a></li>
//             </ul>
//           </div>
          
//           {/* 4. Contact Us & Follow Us Container */}
//           <div className="flex-1 flex flex-col w-full md:w-auto">
            
//             {/* Contact Us Sub-section */}
//             <div className="text-center md:text-left mb-8 md:mb-4"> {/* Adjusted mb-8 to mb-4 for better stacking */}
//               <h4 className="font-bold text-lg mb-4">Contact Us</h4>
//               {/* FIX: Ensure contact details align left on desktop */}
//               <div className="flex flex-col space-y-2 items-center md:items-start">
                
//                 {/* Email Address */}
//                 <div className="flex items-start justify-center md:justify-start space-x-2"> 
//                   <MdMailOutline className={`text-xl flex-shrink-0 mt-1 ${ACCENT_HOVER_COLOR}`} /> 
//                   <span className="text-left">info@jobcollap.com</span> 
//                 </div>
                
//                 {/* Address section */}
//                 <div className="flex items-start justify-center md:justify-start space-x-2 text-[#1A5276]">
//                   <GrLocation className={`w-5 h-5 flex-shrink-0 mt-0.5 ${ACCENT_HOVER_COLOR}`} /> 
//                   <address className="not-italic text-left mb-1">
//                     <span className="block">#24, St.562, Boeung Kak,</span>
//                     <span className="block">Toul Kork, Phnom Penh,</span>
//                     <span className="block">Cambodia</span>
//                   </address>
//                 </div>
//               </div>
//             </div>

//             {/* Follow Us Sub-section */}
//             <div className="text-center md:text-left">
//               <h4 className="font-bold text-lg mb-4">Follow Us</h4>
//               {/* FIX: Ensure social icons align left on desktop */}
//               <div className="flex justify-center md:justify-start space-x-2.5 text-3xl"> 
//                 <a href="#" aria-label="Facebook" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <TiSocialFacebookCircular />
//                 </a>
//                 <a href="#" aria-label="Telegram" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <LiaTelegram />
//                 </a>
//                 <a href="#" aria-label="YouTube" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <AiOutlineYoutube />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Horizontal Divider and Copyright */}
//         <div className="mt-8 pt-4 border-t border-[#1A5276]/20">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1A5276] text-sm py-2">
//             <p className="flex justify-center items-center space-x-1">
//               <span className="text-xl">©</span>
//               <span>2025 JobCollab. All rights reserved.</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;















// import { MdOutlineMail, MdOutlineLocationOn, MdOutlineLocationCity, MdOutlineLocationOff } from 'react-icons/md';
// import { FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
// import { TiSocialFacebookCircular } from "react-icons/ti";
// import { LiaTelegram } from "react-icons/lia";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { GrLocation } from "react-icons/gr";
// import { MdMailOutline } from "react-icons/md";
// // --- NEW IMPORT FOR ADDRESS ICON ---
// import { MapPin } from 'lucide-react'; 
// // ------------------------------------

// const Footer = () => {
//   // Define a color variable consistent with the lucide icon styling
//   const ICON_COLOR = "text-[#3b5998]"; 
//   const ACCENT_HOVER_COLOR = "hover:text-[#FF7A00]";

//   return (
//     <footer className="bg-[#EFF7FF] py-8 text-[#1A5276] font-sans">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">

//           {/* Organized and sponsored By */}
//           <div className="flex-1 flex flex-col items-center text-center">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Organized and sponsored By</h4>
//             <div className="w-30 h-30">
//               <img src="ISTAD.png" alt="ISTAD" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* Prepared By */}
//           <div className="flex-1 flex flex-col items-center text-center">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Prepared By</h4>
//             <div className="w-40 h-auto">
//               <img src="JOBCOLLAB.png" alt="JOBCOLLAB" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="flex-1 text-center md:text-left">
//             <h4 className="font-bold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Home</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Find Jobs</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">About Us</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Contact Us & Follow Us Container */}
//           <div className="flex-1 flex flex-col md:flex-row md:space-x-8 w-full md:w-auto">
//             {/* Contact Us */}
//          <div className="flex-1 text-center md:text-left min-w-[250px] mb-8 md:mb-0">
//             <h4 className="font-bold text-lg mb-4">Contact Us</h4>
//             <div className="flex flex-col space-y-2">
//               {/* Email Address */}
//               <div className="flex items-start space-x-2"> 
//                 <MdMailOutline className={`text-xl flex-shrink-0 mt-1 ${ACCENT_HOVER_COLOR}`} /> 
//                 <span className="text-left">info@jobcollap.com</span> 
//               </div>
//               
//               {/* Address section (UPDATED TO USE SELECTED LUCIDE/TAILWIND STYLES) */}
//               <div className="flex items-start space-x-2 text-[#1A5276]">
//                 
//                 {/* Icon (MapPin from lucide-react) */}
//                 <MapPin className={`w-5 h-5 flex-shrink-0 mt-0.1 icon-[#1A5276] hover:text-[#FF7A00] {ICON_COLOR}`} /> 
//                 
//                 {/* Address text container */}
//                 <address className="not-italic text-left  mb-1">
//                   <span className="block">#24, St.562, Boeung Kak,</span>
//                   <span className="block">Toul Kork, Phnom Penh,</span>
//                   <span className="block">Cambodia</span>
//                 </address>
//               </div>
//             </div>
//           </div>


//             {/* Follow Us */}
//             <div className="flex-1 text-center">
//               <h4 className="font-bold text-lg mb-4">Follow Us</h4>
//               <div className="flex justify-center space-x-2.5 text-2xl ">
//                 <a href="#" aria-label="Facebook" className={`hover:text-[#FF7A00] transition-colors duration-300 text-right `}>
//                   <TiSocialFacebookCircular />
//                 </a>
//                 <a href="#" aria-label="Telegram" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <LiaTelegram />
//                 </a>
//                 <a href="#" aria-label="YouTube" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <AiOutlineYoutube />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//        {/* Copyright Section (Added from the image) */}
//       <div className="mt-8 pt-4 border-t text-[#1A5276] bg-[#EFF7FF]">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1A5276] text-sm py-2">
//           <p className="flex justify-center items-center space-x-1">
//             <span className="text-xl">©</span>
//             <span>2025 JobCollab. All rights reserved.</span>
//           </p>
//         </div>
//       </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;









// import { MdOutlineMail, MdOutlineLocationOn, MdOutlineLocationCity, MdOutlineLocationOff } from 'react-icons/md';
// import { FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
// import { TiSocialFacebookCircular } from "react-icons/ti";
// import { LiaTelegram } from "react-icons/lia";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { GrLocation } from "react-icons/gr";
// import { MdMailOutline } from "react-icons/md";
// // --- NEW IMPORT FOR ADDRESS ICON ---
// import { MapPin } from 'lucide-react'; 
// // ------------------------------------

// const Footer = () => {
//   // Define a color variable consistent with the lucide icon styling
//   const ICON_COLOR = "text-[#3b5998]"; 
//   const ACCENT_HOVER_COLOR = "hover:text-[#FF7A00]";

//   return (
//     <footer className="bg-[#EFF7FF] py-8 text-[#1A5276] font-sans">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main Layout Container: 
//             The original flex classes are replaced with a responsive CSS Grid setup.
//             - Mobile (default): grid-cols-1 (stacked)
//             - Tablet (md): grid-cols-2 (two columns)
//             - Desktop (lg): grid-cols-5 (five columns) */}
//         <div className="grid grid-cols-1 gap-8 
//                         md:grid-cols-2 md:gap-x-8 md:gap-y-10 
//                         lg:grid-cols-5 lg:gap-x-16 lg:gap-y-0">

//           {/* Organized and sponsored By */}
//          <div className="flex-1 flex flex-col items-center text-center">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Organized and sponsored By</h4>
//             <div className="w-30 h-30">
//               <img src="ISTAD.png" alt="ISTAD" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* Prepared By */}
//           <div className="flex flex-col items-center text-center">
//             <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Prepared By</h4>
//             <div className="w-40 h-auto">
//               <img src="JOBCOLLAB.png" alt="JOBCOLLAB" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* Quick Links 
//               Added md:text-left to align content correctly in multi-column layouts */}
//           <div className="text-center md:text-left">
//             <h4 className="font-bold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Home</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Find Jobs</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">About Us</a></li>
//               <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Contact Us & Follow Us Container 
//               This block is configured to span two columns on tablet/desktop, and manage its inner content: */}
//           <div className="md:col-span-2 lg:col-span-2 flex flex-col space-y-8 lg:flex-row lg:space-x-16 w-full">
            
//             {/* Contact Us 
//                 Added responsive alignment (items-center/md:items-start) for inner content: */}
//             <div className="flex-1 text-center md:text-left min-w-[250px] mb-8 md:mb-0">
//               <h4 className="font-bold text-lg mb-4">Contact Us</h4>
//               <div className="flex flex-col space-y-2 items-center md:items-start">
//                 {/* Email Address */}
//                 <div className="flex items-start space-x-2"> 
//                   <MdMailOutline className={`text-xl flex-shrink-0 mt-1 ${ACCENT_HOVER_COLOR}`} /> 
//                   <span className="text-left">info@jobcollap.com</span> 
//                 </div>
                
//                 {/* Address section */}
//                 <div className="flex items-start space-x-2 text-[#1A5276]">
                  
//                   {/* Icon (MapPin from lucide-react) */}
//                   <MapPin className={`w-5 h-5 flex-shrink-0 mt-0.1 icon-[#1A5276] hover:text-[#FF7A00] {ICON_COLOR}`} /> 
                  
//                   {/* Address text container */}
//                   <address className="not-italic text-left  mb-1">
//                     <span className="block">#24, St.562, Boeung Kak,</span>
//                     <span className="block">Toul Kork, Phnom Penh,</span>
//                     <span className="block">Cambodia</span>
//                   </address>
//                 </div>
//               </div>
//             </div>


//             {/* Follow Us 
//                 Added lg:justify-start to align icons correctly on the desktop view: */}
//             <div className="flex-1 text-center">
//               <h4 className="font-bold text-lg mb-4">Follow Us</h4>
//               <div className="flex justify-center space-x-2.5 text-2xl ">
//                 <a href="#" aria-label="Facebook" className={`hover:text-[#FF7A00] transition-colors duration-300 text-right `}>
//                   <TiSocialFacebookCircular />
//                 </a>
//                 <a href="#" aria-label="Telegram" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <LiaTelegram />
//                 </a>
//                 <a href="#" aria-label="YouTube" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
//                   <AiOutlineYoutube />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Copyright Section (Added from the image) */}
//         <div className="mt-8 pt-4 border-t text-[#1A5276] bg-[#EFF7FF]">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1A5276] text-sm py-2">
//             <p className="flex justify-center items-center space-x-1">
//               <span className="text-xl">©</span>
//               <span>2025 JobCollab. All rights reserved.</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;










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
        
        {/* Main Layout Container: 
            1. Changed lg:grid-cols-6 back to lg:grid-cols-5 (one column per content section).
            2. Added 'justify-center' to the parent container, and changed it from 'grid' to 'flex' 
               on large screens to allow horizontal centering of the 5 columns.
            
            NOTE: To center a 5-column grid effectively on wide screens, it is often necessary to 
            temporarily treat it as a flex container and center it, or use auto margins. 
            I've used a centered grid approach here which is more robust for centering a block 
            of content that spans multiple columns. */}
        <div className="grid grid-cols-1 gap-8 
                        md:grid-cols-2 md:gap-x-8 md:gap-y-10 
                        lg:grid-cols-5 lg:gap-x-16 lg:gap-y-0 lg:justify-center">
            
          {/* Organized and sponsored By */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Organized and sponsored By</h4>
            <div className="w-30 h-30">
              <img src="ISTAD.png" alt="ISTAD" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Prepared By */}
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-lg mb-4 whitespace-nowrap">Prepared By</h4>
            <div className="w-40 h-auto">
              <img src="JOBCOLLAB.png" alt="JOBCOLLAB" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Quick Links 
              Responsive alignment added: centered on mobile, left-aligned on tablet/desktop */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Home</a></li>
              <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Find Jobs</a></li>
              <li><a href="#" className="hover:underline hover:text-[#FF7A00]">About Us</a></li>
              <li><a href="#" className="hover:underline hover:text-[#FF7A00]">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us & Follow Us Container 
              This block is configured to span two columns on tablet/desktop, and manage its inner content: */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col space-y-8 lg:flex-row lg:space-x-16 w-full">
            
            {/* Contact Us 
                Responsive alignment logic ensures content is left-aligned in column view: */}
            <div className="flex-1 text-center md:text-left min-w-[250px] mb-8 md:mb-0">
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="flex flex-col space-y-2 items-center md:items-start">
                {/* Email Address */}
                <div className="flex items-start space-x-2"> 
                  <MdMailOutline className={`text-xl flex-shrink-0 mt-1 ${ACCENT_HOVER_COLOR}`} /> 
                  <span className="text-left">info@jobcollap.com</span> 
                </div>
                
                {/* Address section */}
                <div className="flex items-start space-x-2 text-[#1A5276]">
                  
                  {/* Icon (MapPin from lucide-react) */}
                  <MapPin className={`w-5 h-5 flex-shrink-0 mt-0.1 icon-[#1A5276] hover:text-[#FF7A00] {ICON_COLOR}`} /> 
                  
                  {/* Address text container */}
                  <address className="not-italic text-left  mb-1">
                    <span className="block">#24, St.562, Boeung Kak,</span>
                    <span className="block">Toul Kork, Phnom Penh,</span>
                    <span className="block">Cambodia</span>
                  </address>
                </div>
              </div>
            </div>


            {/* Follow Us 
                Added lg:justify-start to align icons correctly on the desktop view: */}
            <div className="flex-1 text-center">
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex justify-center lg:justify-start space-x-2.5 text-2xl ">
                <a href="#" aria-label="Facebook" className={`hover:text-[#FF7A00] transition-colors duration-300 text-right `}>
                  <TiSocialFacebookCircular />
                </a>
                <a href="#" aria-label="Telegram" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
                  <LiaTelegram />
                </a>
                <a href="#" aria-label="Youtube" className={`hover:text-[#FF7A00] transition-colors duration-300`}>
                  <AiOutlineYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section (Still centered) */}
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