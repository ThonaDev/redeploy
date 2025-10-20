import React, { useState, useRef } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const nameRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // autosize helper for the name field (allows long names to expand)
  const handleNameInput = (e) => {
    const el = e.target;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="first-name" className="block text-sm font-semibold text-[#1A5276]">
            First Name
          </label>

          {/* swapped input -> autosizing textarea so very long names remain visible */}
          <textarea
            id="first-name"
            name="firstName"
            ref={nameRef}
            rows={1}
            value={formData.firstName}
            onChange={handleChange}
            onInput={handleNameInput}
            placeholder="Your name"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1A5276] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1A5276] focus:border-[#1A5276] resize-none overflow-hidden"
            style={{ lineHeight: "1.25rem" }}
            aria-label="First name (can be long)"
          />
        </div>

        {/* Email moved to its own full-width row on small+ screens */}
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold text-[#1A5276]">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="your email"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1A5276] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1A5276] focus:border-[#1A5276]"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="phone-number" className="block text-sm font-semibold text-[#1A5276]">Phone number</label>
          <input
            id="phone-number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Contact number"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1A5276] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1A5276] focus:border-[#1A5276]"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-[#1A5276]">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Leave us a message..."
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1A5276] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1A5276] focus:border-[#1A5276]"
          />
        </div>
      </div>

      <div className="pt-5 flex justify-center sm:justify-start">
        <button
          type="submit"
          className="w-full block py-2 px-8 bg-[#1A5276] hover:bg-[#149AC5] text-white text-lg font-bold rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;