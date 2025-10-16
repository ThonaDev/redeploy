import React from "react";
import img from "./../../assets/ContactUsPicture.png";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import ContactDetail from "../../components/contactUs/ContactDetail.jsx";
import GetIntouchCard from "../../components/contactUs/GetIntouchCard.jsx";
//import NavBar from "../../components/layouts/navbar-afterLogin.jsx";
// import footer from "../../components/layouts/footer.jsx";

function ContactUs() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* left: image + details */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src={img}
                alt="contact"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-lg p-4 sm:p-6">
              <div className="space-y-4">
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
          </div>

          {/* right: form/card */}
          <div>
            <GetIntouchCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
