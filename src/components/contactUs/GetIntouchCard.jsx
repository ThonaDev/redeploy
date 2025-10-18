import React from 'react';
import ContactForm from './ContactForm';

function GetIntouchCard() {
  return (
    <div className="mt-6 lg:mt-0">
      <div className="rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A5276]">
          Get in Touch
        </h2>
        <p className="mt-2 text-[#1A5276]">
          Our friendly team would love to hear from you
        </p>

        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default GetIntouchCard;