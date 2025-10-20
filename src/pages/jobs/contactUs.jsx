import React from "react";
import img from "./../../assets/ContactUsPicture.png";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import ContactDetail from "../../components/contactUs/ContactDetail.jsx";
import GetIntouchCard from "../../components/contactUs/GetIntouchCard.jsx";
// import NavBar from "../../components/layouts/navbar-afterLogin.jsx";
// import Footer from "../../components/layouts/footer.jsx";

function ContactUs() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
          {/* Left section: image + contact details */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={img}
                alt="contact"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                loading="lazy"
              />
            </div>

            {/* Contact details */}
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
                value="+855 XXX XXX XXX"
              />
              <ContactDetail
                icon={<CiLocationOn />}
                label="Office"
                value="St 562, Phnom Penh 12151"
              />
            </div>
          </div>

          {/* Right section: contact form */}
          <div>
            <GetIntouchCard />
          </div>
        </div>

        {/* Single big Google Map under both columns */}
        <div className="mt-10 rounded-lg overflow-hidden ">
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
