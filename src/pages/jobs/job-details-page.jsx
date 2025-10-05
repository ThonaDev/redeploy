// import React from 'react';
// import { MapPin, Mail, Phone, Clock, Bookmark } from 'lucide-react';

// export default function App() {
//   const Card = ({ children, className }) => (
//     <div className={`bg-white rounded-xl p- mb-6 ${className}`}>
//       {children}
//     </div>
//   );

//   return (
//     <div className="bg-[#EFF7FF] min-h-screen px-16 py-8 flex flex-col items-center font-sans">
//       {/* Section 1: Job Header and Tags */}
//       <Card className="w-full max-w-6xl py-6 px-8 rounded-2xl">
//         <div className="flex justify-between items-center mt-2">
//           <h1 className="text-xl font-semibold text-[#1A5276] py-1.5 ">Web Developer</h1>
//           <button className=" text-[#FF6C1A] p-2 text-center ">
//              <Bookmark 
//         className="h-8 w-8 transition-colors duration-300 
//                    hover:fill-[#FF6C1A] hover:text-[#FF6C1A]" 
//       /> 
//           </button>
//         </div>
//         <div className="flex items-center space-x-4 mb-4">
//           <div className="bg-white p-1 rounded-full flex items-center justify-center w-10 h-10 flex-shrink-0">
//             <img src="./google.png" alt="google" className="w-11 h-10 rounded-full object-cover" />
//           </div>
//           <div className="text-start">
//             <div className="flex flex-col items-start">
//               <p className="text-[#1A5276] text-sm  py-1.1">Freelancing</p>
//               <div className="flex items-center text-xs text-[#1A5276] mt-0.5">
//                 <MapPin className="w-3 h-3 mr-1 text-[#1A5276] " />
//                 <span >Toul Kuok</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap items-center space-x-2 pb-4 hover:text-[#FF7A00]">
//           <span className="bg-transparent text-orange-400 text-xs font-medium px-2 py-1 rounded-md border border-blue-300 hover:text-[#FF7A00]">
//             HTML
//           </span>
//           <span className="bg-transparent text-purple-400 text-xs font-medium px-2 py-1 rounded-md border border-orange-300 hover:text-[#FF7A00]">
//             CSS
//           </span>
//           <span className="bg-transparent text-yellow-400 text-xs font-medium px-2 py-1 rounded-md border border-blue-300 hover:text-[#FF7A00]">
//             JavaScript
//           </span>
//           <span className="bg-transparent text-cyan-400 text-xs font-medium px-2 py-1 rounded-md border border-purple-400 hover:text-[#FF7A00]">
//             React
//           </span>
//           <span className="bg-transparent text-orange-300 text-xs font-medium px-2 py-1 rounded-md border border-red-400 hover:text-[#FF7A00]">
//             Figma
//           </span>
//         </div>
//         <div className="flex justify-between items-center mt-4 hover:text-[#FF7A00]">
//           <span className="text-[#1A5276] text-sm font-normal hover:text-[#FF7A00]">Negotiate</span>
//           <button className="bg-[#1A5276] text-white font-medium text-[0.6rem] px-2 py-0.5 pt-0.5 pb-0.1 mr-1.2 rounded-lg hover:bg-[#149AC5] transition-colors ">
//             Apply
//           </button>
//         </div>
//       </Card>
//       {/* Section 2: Description */}
//       {/* <Card className="w-full max-w-5xl py-6 px-8 rounded-2xl text-start">
//         <h2 className="text-xl font-semibold text-[#1A5276] mb-1 text-start ">Description</h2>
//         <p className="text-[#1A5276] leading-relaxed text-sm text-start ">
//           A Web Developer is a professional who builds and maintains websites or web applications. They work with programming languages like HTML, CSS, JavaScript, and sometimes backend technologies to ensure websites are functional, user-friendly, and responsive. Their role combines coding, problem-solving, and design to deliver smooth online experiences.
//         </p>
//       </Card> */}

//       {/* Section 2: Description */}
//       <Card className="w-full max-w-6xl py-6 px-8 rounded-2xl text-start">
//         <h2 className="text-xl font-semibold text-[#1A5276] mb-1 text-start ">Description</h2>
//         <p className="text-[#1A5276] leading-relaxed text-base text-start ">
//           A Web Developer is a professional who builds and maintains websites or web applications. They work with programming languages like HTML, CSS, JavaScript, and sometimes technologies to ensure websites are functional, user-friendly, and highly responsive. Their role combines coding, problem-solving, and design to deliver smooth online experiences.
//         </p>
//       </Card>
//       {/* Section 3: Job Requirements and Contact Info */}
//       <Card className="w-full max-w-6xl py-6 px-8 rounded-2xl space-x-1 hover:text-[#FF7A00]">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 hover:text-[#FF7A00]">
//           {/* Job Requirements */}
//           <div className="text-start">
//             <h2 className="text-xl font-semibold text-[#1A5276] mb-4 ">Job Requirements:</h2>
//             <ul className="list-none text-[#1A5276] space-y-3">
//               <li className="flex items-start text-sm">
//                 <span className="text-[#1A5276] mr-2 ">•</span>
//                 <span >Strong knowledge of HTML, CSS, and JavaScript.</span>
//               </li>
//               <li className="flex items-start text-sm">
//                 <span className="text-[#1A5276] mr-2 ">•</span>
//                 <span >Experience with frontend frameworks (React, Vue, Angular).</span>
//               </li>
//               <li className="flex items-start text-sm">
//                 <span className="text-[#1A5276] mr-2 ">•</span>
//                 <span>Familiarity with backend development and databases.</span>
//               </li>
//               <li className="flex items-start text-sm">
//                 <span className="text-[#1A5276] mr-2 ">•</span>
//                 <span >Understanding of responsive design and cross-browser compatibility.</span>
//               </li>
//               <li className="flex items-start text-sm">
//                 <span className="text-[#1A5276] mr-2 ">•</span>
//                 <span >Knowledge of version control (Git/GitHub).</span>
//               </li>
//             </ul>
//             {/* Key Skills */}
//             <h2 className="text-xl font-semibold text-[#1A5276] mt-6 mb-4 ">Key Skills:</h2>
//             <ul className="list-none text-[#1A5276] space-y-3">
//               <li className="flex items-start text-sm">
//                 <span className="text-[#1A5276] mr-2 ">•</span>
//                 <span >Frontend development (HTML, CSS, JS, frameworks).</span>
//               </li>
//               <li className="flex items-start text-sm">
//                 <span className="text-[#1A5276] mr-2 ">•</span>
//                 <span >Backend development and API integration.</span>
//               </li>
//               <li className="flex items-start text-sm">
//                 <span className="text-[#1A5276] mr-2 ">•</span>
//                 <span>Database management (SQL/NoSQL).</span>
//               </li>
//               <li className="flex items-start text-sm">
//                 <span className="text-[#1A5276] mr-2 ">•</span>
//                 <span >UI/UX awareness for better user experience.</span>
//               </li>
//               <li className="flex items-start text-sm">
//                 <span className="text-[#1A5276] mr-2 ">•</span>
//                 <span >Problem-solving and teamwork skills.</span>
//               </li>
//             </ul>
//           </div>
//           {/* Contact owner */}
//           <div className="text-start ml-30 ">
//             <h2 className="text-xl font-semibold text-[#1A5276] mb-1 ">Contact owner</h2>
//             <p className="text-sm text-gray-600 mb-4 ">
//               If you have any questions, please feel free to let us know
//             </p>
//             <div className="space-y-3 text-gray-600 text-sm">
              
//               {/* Address (MODIFIED: added underline to the address text) */}
//               <div className="flex items-start space-x-2">
//                 <MapPin className="w-5 h-5 text-[#1A5276] flex-shrink-0 hover:text-[#FF7A00]" />
//                 <p className="hover:text-[#FF7A00]">
//                   {/* Added an <a> tag with underline class */}
//                   <a href="#" className="underline hover:no-underline mt-2">
//                     <span className='block'>Sangkat Boeung, Kak I,Khan Toul Kork,</span> 
//                     <span className='block'>Phnom Penh, Cambodia</span>
//                   </a>
//                 </p>
//               </div>
              
//               {/* Email */}
//               <div className="flex items-start space-x-2 ">
//                 <Mail className="w-5 h-5 text-[#1A5276] mt-0  flex-shrink-0 hover:text-[#FF7A00]" />
//                 <p className="hover:text-[#FF7A00] mt-0.1">user@gmail.com</p>
//               </div>
              
//               {/* Phone */}
//               <div className="flex items-start space-x-2">
//                 <Phone className="w-5 h-5 text-[#1A5276] mt-0 flex-shrink-0 hover:text-[#FF7A00]" />
//                 <p className="hover:text-[#FF7A00] mt-0.5">+855 XX-XXX-XXX</p>
//               </div>
              
//               {/* Hours */}
//               <div className="flex items-start space-x-2">
//                 <Clock className="w-5 h-5 text-[#1A5276] mt-0 flex-shrink-0 hover:text-[#FF7A00]" />
//                 <p className="hover:text-[#FF7A00] mt-0.5">
//                     <span className='block'>Monday - Friday</span> 
//                     <span className='block'>X:XXam - X:XXpm</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }










import React from 'react';
import { MapPin, Mail, Phone, Clock, Bookmark } from 'lucide-react';

export default function App() {
  // State for the bookmark functionality
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  // Card component for consistent styling and responsive padding
  const Card = ({ children, className }) => (
    // Responsive padding (p-4 mobile, p-6 tablet, p-8 desktop)
    // Removed 'shadow-lg' here as requested.
    <div className={`bg-white rounded-xl p-4 sm:p-6 md:p-8 mb-6 mx-auto ${className}`}>
      {children}
    </div>
  );

  return (
    // Main container: Adjusted horizontal padding for responsiveness
    <div className="bg-[#EFF7FF] min-h-screen px-4 sm:px-8 md:px-16 py-8 flex flex-col items-center font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        /* Using Inter font */
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      {/* Section 1: Job Header and Tags */}
      <Card className="w-full max-w-6xl py-6 px-8 rounded-2xl">
        <div className="flex justify-between items-center mt-2">
          <h1 className="text-xl font-semibold text-[#1A5276] py-1.5 ">Web Developer</h1>
          <button className=" text-[#FF6C1A] p-2 text-center ">
             <Bookmark 
        className="h-8 w-8 transition-colors duration-300 
                   hover:fill-[#FF6C1A] hover:text-[#FF6C1A]" 
      /> 
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-white p-1 rounded-full flex items-center justify-center w-10 h-10 flex-shrink-0">
            <img src="./google.png" alt="google" className="w-11 h-10 rounded-full object-cover" />
          </div>
          <div className="text-start">
            <div className="flex flex-col items-start">
              <p className="text-[#1A5276] text-sm  py-1.1">Freelancing</p>
              <div className="flex items-center text-xs text-[#1A5276] mt-0.5">
                <MapPin className="w-3 h-3 mr-1 text-[#1A5276] " />
                <span >Toul Kuok</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center space-x-2 pb-4 hover:text-[#FF7A00]">
          <span className="bg-transparent text-orange-400 text-xs font-medium px-2 py-1 rounded-md border border-blue-300 hover:text-[#FF7A00]">
            HTML
          </span>
          <span className="bg-transparent text-purple-400 text-xs font-medium px-2 py-1 rounded-md border border-orange-300 hover:text-[#FF7A00]">
            CSS
          </span>
          <span className="bg-transparent text-yellow-400 text-xs font-medium px-2 py-1 rounded-md border border-blue-300 hover:text-[#FF7A00]">
            JavaScript
          </span>
          <span className="bg-transparent text-cyan-400 text-xs font-medium px-2 py-1 rounded-md border border-purple-400 hover:text-[#FF7A00]">
            React
          </span>
          <span className="bg-transparent text-orange-300 text-xs font-medium px-2 py-1 rounded-md border border-red-400 hover:text-[#FF7A00]">
            Figma
          </span>
        </div>
        <div className="flex justify-between items-center mt-4 hover:text-[#FF7A00]">
          <span className="text-[#1A5276] text-sm font-normal hover:text-[#FF7A00]">Negotiate</span>
          <button className="bg-[#1A5276] text-white font-medium text-[0.6rem] px-2 py-0.5 pt-0.5 pb-0.1 mr-1.2 rounded-lg hover:bg-[#149AC5] transition-colors ">
            Apply
          </button>
        </div>
      </Card>
      
      {/* Section 2: Description */}
      <Card className="w-full max-w-6xl py-6 px-8 rounded-2xl text-start">
        <h2 className="text-xl font-semibold text-[#1A5276] mb-1 text-start ">Description</h2>
        <p className="text-[#1A5276] leading-relaxed text-base text-start font-regular">
          A Web Developer is a professional who builds and maintains websites or web applications. They work with programming languages like HTML, CSS, JavaScript, and sometimes technologies to ensure websites are functional, user-friendly, and highly responsive. Their role combines coding, problem-solving, and design to deliver smooth online experiences.
        </p>
      </Card>

      {/* Section 3: Job Requirements and Contact Info (Responsive Grid) */}
      <Card className="w-full max-w-6xl rounded-2xl">
        {/* Core responsiveness: 1 column on mobile, 2 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Column 1: Job Requirements and Key Skills */}
          <div className="text-start">
            <h2 className="text-xl font-semibold text-[#1A5276] mb-4">Job Requirements:</h2>
            
            {/* Restored original list content from user's image reference */}
            <ul className="list-none text-[#1A5276] space-y-3 mb-8">
              {[
                "Strong knowledge of HTML, CSS, and JavaScript.",
                "Experience with frontend frameworks (React, Vue, Angular).",
                "Familiarity with backend development and databases.",
                "Understanding of responsive design and cross-browser compatibility.",
                "Knowledge of version control (Git/GitHub)."
              ].map((req, index) => (
                <li key={`req-${index}`} className="flex items-start text-sm">
                  <span className="text-[#1A5276] mr-2 text-lg leading-none">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-[#1A5276] mb-4">Key Skills:</h2>
            <ul className="list-none text-[#1A5276] space-y-3">
              {[
                "Frontend development (HTML, CSS, JS, frameworks).",
                "Backend development and API integration.",
                "Database management (SQL/NoSQL).",
                "UI/UX awareness for better user experience.",
                "Problem-solving and teamwork skills."
              ].map((skill, index) => (
                <li key={`skill-${index}`} className="flex items-start text-sm">
                  <span className="text-[#1A5276] mr-2 text-lg leading-none">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact Owner */}
          <div className="text-start md:mt-0 mt-8">
            <h2 className="text-xl font-semibold text-[#1A5276] mb-3">Contact owner</h2>
            <p className="text-sm text-gray-500 mb-6">
              If you have any questions, please feel free to let us know
            </p>
            <div className="space-y-4 text-gray-500 text-sm">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#1A5276] flex-shrink-0 " />
                <address className='not-italic'>
                  {/* Underlined to match the look in the image */}
                  <a href="#" className="underline text-gray-500 hover:text-[#FF6C1A] hover:no-underline block">
                    <span className='block'>Sangkat Boeung, Kak I,Khan Toul Kork,</span> 
                    <span className='block'>Phnom Penh, Cambodia</span>
                  </a>
                </address>
              </div>
              
              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#1A5276] flex-shrink-0 " />
                <a href="mailto:user@gmail.com" className="hover:underline text-gray-500 hover:text-[#FF6C1A]">user@gmail.com</a>
              </div>
              
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#1A5276] flex-shrink-0 " />
                <a href="tel:+855-XX-XXX-XXX" className="hover:underline text-gray-500 hover:text-[#FF6C1A]">+855 XX-XXX-XXX</a>
              </div>
              
              {/* Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#1A5276] flex-shrink-0 " />
                <div className='text-gray-500'>
                  <span className='block'>Monday - Friday</span> 
                  <span className='block text-gray-500'>X:XXam - X:XXpm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
