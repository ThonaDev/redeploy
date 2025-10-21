import React, { useState, useRef } from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import img from './../../assets/ContactUsPicture.png';

// ContactDetail Component
const ContactDetail = ({ icon, label, value, href }) => {
  return (
    <div className="flex items-start sm:items-center gap-4 group">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-blue-50 text-[#1A5276] rounded-full ring-1 ring-blue-100">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#1A5276]/20 text-[#1A5276] rounded-full">
            {icon}
          </div>
        </div>
      </div>
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

// InputField Component
const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
}) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor={name}
        className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#1A5276] font-medium"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full border rounded-md px-3 py-2 text-[#1A5276] focus:outline-none focus:ring-2 focus:ring-[#1A5276]"
      />
    </div>
  );
};

// ContactForm Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const nameRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNameInput = (e) => {
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure EmailJS (SMTP.js) is loaded
    if (typeof Email === 'undefined') {
      setStatus({ type: 'error', message: 'Email service not loaded. Please try again later.' });
      return;
    }

    // Validate form data
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    // Prepare email content
    const emailContent = `
      From: ${formData.firstName} <${formData.email}>
      Phone: ${formData.phoneNumber || 'Not provided'}
      Message: ${formData.message}
    `;

    // Send email using SMTP.js with Elastic Email SMTP
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'jobcollap@gmail.com',
      Password: 'FCE9D32AE713B3B6AC7C25CC31E63DFF2FD5', // Replace with your Elastic Email SMTP password
      // Note: The provided password (9BFCB96ECC918633501FDA9B8B9BE69CEB68) is likely an API key
      Port: 2525,
      To: 'jobcollab@gmail.com',
      From: formData.email || 'jobcollap@gmail.com',
      Subject: `Contact Form Submission from ${formData.firstName}`,
      Body: emailContent,
    })
      .then((message) => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ firstName: '', email: '', phoneNumber: '', message: '' });
        if (nameRef.current) {
          nameRef.current.style.height = 'auto';
        }
      })
      .catch((error) => {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        console.error('Email sending failed:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="first-name" className="block text-sm font-semibold text-[#1A5276]">
            Full Name
          </label>
          <InputField
            id="first-name"
            name="firstName"
            ref={nameRef}
            rows={1}
            value={formData.firstName}
            onChange={handleChange}
            onInput={handleNameInput}
            placeholder="Your name"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1A5276] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1A5276] focus:border-[#1A5276] resize-none overflow-hidden"
            style={{ lineHeight: '1.25rem' }}
            aria-label="First name (can be long)"
            // required
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-[#1A5276]">
            Email
          </label>
          <InputField
            label=""
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your email"
            // required
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-[#1A5276]">
            Phone number
          </label>
          <InputField
            label=""
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Contact number"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-[#1A5276]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Leave us a message..."
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-[#1A5276] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1A5276] focus:border-[#1A5276]"
            required
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
      {status.message && (
        <p className={`mt-2 text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {status.message}
        </p>
      )}
    </form>
  );
};

// GetIntouchCard Component
const GetIntouchCard = () => {
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
};

// ContactUs Component
function ContactUs() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
          <div className="flex flex-col gap-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src={img}
                alt="contact"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg p-4 sm:p-6 space-y-4">
              <ContactDetail
                icon={<TfiEmail />}
                label="Email"
                value="jobcollab@gmail.com"
                href="mailto:jobcollab@gmail.com"
              />
              <ContactDetail
                icon={<MdOutlineLocalPhone />}
                label="Phone"
                value="+855 96 427 9700"
              />
              <ContactDetail
                icon={<CiLocationOn />}
                label="Office"
                value="#40, Street 273, Phnom Penh, Cambodia"
              />
            </div>
          </div>
          <div>
            <GetIntouchCard />
          </div>
        </div>
        <div className="mt-10 rounded-lg overflow-hidden">
          <iframe
            title="JobCollab Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.5335955297364!2d104.8988274740682!3d11.585255988616998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2skh!4v1760887815194!5m2!1sen!2skh"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactUs;