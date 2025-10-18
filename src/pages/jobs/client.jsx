import React from "react";
import lenovo from "../../assets/lenovo.png";
import microsoft from "../../assets/microsoft.png";
import samsung from "../../assets/samsung.png";
import yahoo from "../../assets/yahoo.png";
import youtube from "../../assets/youtube.png";

export default function Client() {
  return (
    <section className="max-w-7xl mx-auto mt-12 mb-18 px-4 font-poppins">
      {/* Title */}
      <div className="text-center mb-15">
        <h2 className="text-3xl md:text-[32px] font-semibold text-[#1A5276]">
          We are trusted by the World’s largest companies
        </h2>
      </div>

      {/* Logos */}
      <div className="flex justify-center items-center flex-wrap gap-10 sm:gap-12 md:gap-20 px-10 md:px-0">
        <img
          src={yahoo}
          alt="Yahoo"
          className="h-8 md:h-9 object-contain transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={microsoft}
          alt="Microsoft"
          className="h-8 md:h-9 object-contain transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={youtube}
          alt="YouTube"
          className="h-7 md:h-8 object-contain transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={lenovo}
          alt="Lenovo"
          className="h-6 md:h-6 object-contain transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={samsung}
          alt="Samsung"
          className="h-6 md:h-6 object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </div>
    </section>
  );
}
