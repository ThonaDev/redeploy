import React from 'react';

const ContactDetail = ({ icon, label, value, href }) => {
  return (
    <div className="flex items-start sm:items-center gap-4 group">
      {/* Icon wrapper */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-blue-50 text-[#1A5276] rounded-full ring-1 ring-blue-100">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#1A5276]/20 text-[#1A5276] rounded-full">
            {icon}
          </div>
        </div>
      </div>

      {/* Text wrapper */}
      <div className="flex flex-col min-w-0">
        <p className="text-[#1A5276] text-sm sm:text-base font-semibold">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-[#165779] text-sm sm:text-base break-words hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <p className="text-[#165779] text-sm sm:text-base break-words">
            {value}
          </p>
        )}
      </div>
    </div>
  );
};


export default ContactDetail;