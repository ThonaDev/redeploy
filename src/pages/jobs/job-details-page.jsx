import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiClock, FiBookmark } from 'react-icons/fi';
import { FcGoogle } from "react-icons/fc";

export default function JobDetail() {
const Card = ({ children, className }) => (
<div className={`bg-white rounded-xl p-8 mb-6 ${className}`}>
{children}
</div>
 );

 return (
<div className="bg-blue-50 min-h-screen p-8 flex flex-col items-center font-sans">
 {/* Section 1: Job Header and Tags */}
 <Card className="w-full max-w-4xl py-6 px-8 rounded-2xl">
 <div className="flex justify-between items-center mb-4">
 <div className="flex items-center space-x-4">
 <div className="bg-white p-1 rounded-full flex items-center justify-center w-10 h-10 flex-shrink-0">

{/* <img src="/google.png" alt="google" className=" w-11 h-10 rounded-full object-cover" /> */}
<div className="flex justify-center space-x-5 text-3xl">
    <a href="#"><FcGoogle /></a> </div>
</div>
<div className="text-start">
<div className="flex flex-col items-start ">
 <h1 className="text-xl font-semibold text-[#1A5276] mb-1 py-4">Web Developer</h1>
<p className="text-[#1A5276] text-sm ">Freelancing</p>
<div className="flex items-center text-xs text-[#1A5276] mt-1">
 <FiMapPin className="w-3 h-3 mr-1 text-[#1A5276]" />
<span>Toul Kuok</span>
 </div>
 </div>
 </div>
 </div>
 <button className="text-orange-400 hover:text-gray-400 flex items-center justify-center pt-0.5 py-2 pb-2">
 <FiBookmark className="h-4 w-4" /> {/* Adjusted to h-4 w-4 */}
 </button>
</div>
 <div className="flex flex-wrap items-center space-x-2 mt-4 pb-4">
 <span className="bg-transparent text-orange-400 text-xs font-medium px-2 py-1 rounded-md border border-blue-300 ">
HTML
</span>
 <span className="bg-transparent text-purple-400 text-xs font-medium px-2 py-1 rounded-md border border-orange-300">
 CSS
</span>
<span className="bg-transparent text-yellow-400 text-xs font-medium px-2 py-1 rounded-md border border-blue-300">
 JavaScript
 </span>
 <span className="bg-transparent text-cyan-400 text-xs font-medium px-2 py-1 rounded-md border border-purple-400">
 React
</span>
<span className="bg-transparent text-orange-300 text-xs font-medium px-2 py-1 rounded-md border border-red-400">
Figma
</span>
</div>
<div className="flex justify-between items-center mt-4">
<span className="text-[#1A5276] text-sm font-normal">Negotiate</span>
          <button className=" bg-[#1A5276] text-white font-medium text-[0.6rem] px-2 py-0.1 pt-0.5 pb-0.5 rounded-lg hover:bg-blue-600 transition-colors "> {/* Adjusted text size and padding */}
            Apply
          </button>
        </div>
      </Card>
      {/* Section 2: Description */}
      <Card className="w-full max-w-4xl py-6 px-8 rounded-2xl text-start">
        <h2 className="text-xl font-semibold text-[#1A5276] mb-1 text-start ">Description</h2>
        <p className="text-[#1A5276] leading-relaxed text-sm text-start">
          A Web Developer is a professional who builds and maintains websites or web applications. They work with programming languages like HTML, CSS, and JavaScript, and sometimes backend technologies to ensure websites are functional, user-friendly, and responsive. Their role combines coding, problem-solving, and design to deliver smooth online experiences.
        </p>
      </Card>
      {/* Section 3: Job Requirements and Contact Info */}
      <Card className="w-full max-w-4xl py-6 px-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Job Requirements */}
          <div className="text-start">
            <h2 className="text-xl font-semibold text-[#1A5276] mb-4">Job Requirements:</h2>
            <ul className="list-none text-[#1A5276] space-y-3">
              <li className="flex items-start text-sm">
                <span className="text-[#1A5276] mr-2">•</span>
                <span>Strong knowledge of HTML, CSS, and JavaScript.</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-[#1A5276] mr-2">•</span>
                <span>Experience with frontend frameworks (React, Vue, Angular).</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-[#1A5276] mr-2">•</span>
                <span>Familiarity with backend development and databases.</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-[#1A5276] mr-2">•</span>
                <span>Understanding of responsive design and cross-browser compatibility.</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-[#1A5276] mr-2">•</span>
                <span>Knowledge of version control (Git/GitHub).</span>
              </li>
            </ul>
            {/* Key Skills */}
            <h2 className="text-xl font-semibold text-[#1A5276] mt-6 mb-4">Key Skills:</h2>
            <ul className="list-none text-[#1A5276] space-y-3">
              <li className="flex items-start text-sm">
                <span className="text-[#1A5276] mr-2">•</span>
                <span>Frontend development (HTML, CSS, JS, frameworks).</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-[#1A5276] mr-2">•</span>
                <span>Backend development and API integration.</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-[#1A5276] mr-2">•</span>
                <span>Database management (SQL/NoSQL).</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-[#1A5276] mr-2">•</span>
                <span>UI/UX awareness for better user experience.</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-[#1A5276] mr-2">•</span>
                <span>Problem-solving and teamwork skills.</span>
              </li>
            </ul>
          </div>
          {/* Contact owner */}
          <div className="text-start">
            <h2 className="text-xl font-semibold text-[#1A5276] mb-2">Contact owner</h2>
            <p className="text-xs text-gray-500 mb-4">
              If you have any questions, please feel free to let us know.
            </p>
            <div className="space-y-4 text-gray-700 text-xs">
              <div className="flex items-start space-x-2">
                <FiMapPin className="w-4 h-4 text-[#1A5276] mt-0.5 flex-shrink-0" />
                <p>Sangkat Boeung, Kak I,Khan Toul Kork, Phnom Penh, Cambodia</p>
              </div>
              <div className="flex items-start space-x-2">
                <FiMail className="w-4 h-4 text-[#1A5276] mt-0.5 flex-shrink-0" />
                <p>user@gmail.com</p>
              </div>
              <div className="flex items-start space-x-2">
                <FiPhone className="w-4 h-4 text-[#1A5276] mt-0.5 flex-shrink-0" />
                <p>+855 XX-XXX-XXX</p>
              </div>
              <div className="flex items-start space-x-2">
                <FiClock className="w-4 h-4 text-[#1A5276] mt-0.5 flex-shrink-0" />
                <p>Monday - Friday X:XXam - X:XXpm</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}