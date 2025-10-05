import React from 'react';
// Using Lucide icons for a clean, modern look, similar to how you used react-icons
import { Briefcase, MapPin, Users2, Clock } from 'lucide-react'; 

// Define the data for the cards to keep the JSX clean
const benefitsData = [
  {
    // Combining Briefcase and Clock to represent Work-Life Balance
    icon: () => (
        <div className="relative">
            <Briefcase className="w-6 h-6" />
            <Clock className="w-3 h-3 absolute -top-1 -right-1 fill-current" />
        </div>
    ),
    title: "Work-Life Balance",
    description: "Many remote jobs also come with flexible schedules, which means that workers can start and end their day as they want to choose.",
    // Adjusted: Lighter blue icon background and slightly deeper text color for better contrast
    color: "text-[#3b5998] bg-[#f0f7ff]", // Light blue theme, matching the pale background of the original icons
    iconColor: "text-blue-500", // Blue icon color
  },
  {
    // Using MapPin with Clock to represent working from anywhere/flexibility
    icon: () => (
        <div className="relative">
            <MapPin className="w-6 h-6" />
            <Clock className="w-3 h-3 absolute -top-1 -right-1 fill-current" />
        </div>
    ),
    title: "Work Anywhere",
    description: "Having access to a broader range of job opportunities that aren't limited by geographic location. This can be especially helpful.",
    // Adjusted: Lighter orange icon background
    color: "text-orange-500 bg-[#fff8f0]", // Very light orange theme
    iconColor: "text-orange-500",
  },
  {
    // Using Users2 for the linked/inclusive group feel
    icon: Users2,
    title: "Improved Inclusivity",
    description: "Remote work enables companies to embrace diversity and inclusion by hiring people from a wide variety of different cultural backgrounds. ",
    // Adjusted: Lighter pink icon background
    color: "text-pink-600 bg-[#fff0f5]", // Very light pink theme
    iconColor: "text-pink-600",
  },
];

// Reusable Card Component
const BenefitCard = ({ icon: Icon, title, description, color, iconColor }) => (
  // Restored fixed width (w-[373px]) and height (h-[216px])
  <div className="bg-white rounded-xl border border-gray-200 p-6 w-[373px] h-[216px] flex flex-col justify-between transition duration-300 text-[#1A5276]">
    <div className="flex items-center"> {/* Removed mb-4 to save vertical space for fixed height */}
      
      {/* Icon and its styling */}
      {/* Increased padding (p-3) on the icon wrapper for better visual spacing */}
      <div className={`p-3 rounded-lg mr-4 ${color} ${iconColor}`}> 
        {/* We now render the Icon component (which may be a wrapper for stacked icons) */}
        <Icon className="w-6 h-6" />
      </div>
      
      {/* Title matching the dark blue/gray text aesthetic */}
      <h2 className="text-lg font-bold text-[#1A5276] whitespace-nowrap">{title}</h2>
    </div>
    
    {/* Description text */}
    {/* text-left ensures text is aligned to the start line */}
    <p className="text-[#1A5276] text-[0.95rem] leading-relaxed text-left">
        {description}
    </p>
  </div>
);

// Main Layout Component (Renamed to Homepage)
const Homepage = () => {
  return (
    // Added 'items-center' back to center the card row if it doesn't fill the full width
    <div className="min-h-screen flex flex-col pt-24 pb-12 text-[#1A5276] items-center"> 
      
      {/* Main Title Area */}
      <header className="mb-14 w-full max-w-6xl px-4 mx-auto">
        {/* Title color is a deep blue, matching the source image */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#1A5276] text-center">Your benefit</h1>
      </header>
      
      {/* Cards Container */}
      <main className="w-full max-w-6xl px-4 mx-auto">
        {/* Restored flex layout with justify-center to handle the fixed-width cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          
          {/* Map through data to render the cards */}
          {benefitsData.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
              color={benefit.color}
              iconColor={benefit.iconColor}
            />
          ))}
          
        </div>
      </main>
    </div>
  );
};

export default Homepage;
