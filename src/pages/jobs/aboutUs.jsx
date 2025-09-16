import React from "react";
import {AboutCard} from "../../components/card/about_card/Card-About";
import Sokcheat from "../../images/Sokcheat.jpg";
import Chansokpheng from "../../images/chansokpheng.jpg";
import Sunnich from "../../images/sunnich.jpg";
import Sokkeang from "../../images/sokkeang.jpg";
import PhatPhea from "../../images/phatphea.jpg";
import Mengleang from "../../images/mengleang.jpg";
import Rothanak from "../../images/rothanak.jpg";
import Thona from "../../images/thona.jpg";

export default function About() {
  return (
    <>
      {/* ====== About Section ====== */}
      <section className="bg-gradient-to-b from-blue-200 via-blue-100 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-[#FF7A00]">
              About <span className="text-[#1A5276]">Jobcollap</span>
            </h1>
            <div className="text-lg text-[#1A5276] mb-8 space-y-2">
              <p>A simple and trusted platform where</p>
              <p>freelancers and businesses</p>
              <p>connect and grow</p>
            </div>
            <button className="px-6 py-3 bg-[#1A5276] text-white rounded-2xl font-semibold transition hover:bg-blue-50 hover:text-[#1A5276] border border-transparent hover:border-[#1A5276]">
              Learn More
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center">
            <img src="src/images/hero.png" alt="About Jobcollap" />
          </div>
        </div>
      </section>

      {/* ====== Who We Are Section ====== */}
      <section className="bg-[#F5F5F5] py-6">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="flex justify-center">
            <img src="src/images/Team.jpg" alt="Who We Are" />
          </div>

          {/* Right Side: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FF7A00] font-poppins">
              Who We Are
            </h2>
            <p className="text-lg text-[#1A5276] leading-relaxed">
              JOBCollap is a freelancing platform dedicated to the IT field,
              created to empower skilled tech professionals to find the right
              projects quickly and easily. We focus on connecting freelancers
              with meaningful opportunities that match their expertise,
              location, and goals. With smart search tools, a simple interface,
              and flexible ways to reach clients, JOBCollap makes the freelancing
              journey faster, smoother, and more rewarding. Best of all,
              freelancers have the freedom to work from anywhere, giving them
              full flexibility to manage their careers on their own terms.
            </p>
          </div>
        </div>
      </section>

      {/* ====== Our Vision & Mission Section ====== */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FF7A00] font-poppins">
              Our Vision
            </h2>
            <p className="text-lg text-[#1A5276] leading-relaxed">
              Our vision is to create a trusted platform where freelancers and
              businesses connect with ease, exchange opportunities, and grow
              together. We strive to promote fair, transparent, and meaningful
              work that empowers individuals, strengthens collaboration, and
              builds long-term success for both sides.
            </p>
          </div>
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FF7A00] font-poppins">
              Our Mission
            </h2>
            <p className="text-lg text-[#1A5276] leading-relaxed">
              Our mission is to connect freelancers and businesses through a
              simple, fair, and reliable platform that encourages collaboration,
              supports growth, and drives long-term success. We are committed
              to providing a space where talent and opportunity meet, creating
              value for both individuals and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* ====== Mentors & Teams Section ====== */}
      <div className="flex flex-col items-center py-16 bg-[#F5F5F5]">
        {/* Mentors Section */}
        <section className="w-full max-w-6xl mb-16">
          <h1 className="text-3xl font-bold text-center mb-16 font-poppins text-[#1A5276]">
            Our Mentors
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1 gap-y-12 justify-items-center">
            <AboutCard
              name="Srorng Sokcheat"
              position="Senior Developer"
              imgSrc={Sokcheat}
              imgAlt="Mentor One"
            />
            <AboutCard
              name="Kim Chansokpheng"
              position="Senior Developer"
              imgSrc={Chansokpheng}
              imgAlt="Mentor Two"
            />
          </div>
        </section>

        {/* Team Members Section */}
        <section className="w-full max-w-6xl">
          <h1 className="text-3xl font-bold text-center mb-16 font-poppins text-[#1A5276]">
            Our Teams
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 justify-items-center">
            <AboutCard
              name="Phat Phea"
              position="Front End Developer"
              imgSrc={PhatPhea}
              imgAlt="Phat Phea"
            />
            <AboutCard
              name="Leip Sokkeang"
              position="Front End Developer"
              imgSrc={Sokkeang}
              imgAlt="Sokkeang"
            />
            <AboutCard
              name="Phorn Sunnich"
              position="Front End Developer"
              imgSrc={Sunnich}
              imgAlt="Sunnich"
            />
            <AboutCard
              name="Senghorng Mengleang"
              position="Front End Developer"
              imgSrc={Mengleang}
              imgAlt="Mengleang"
            />
            <AboutCard
              name="Ben Thona"
              position="Front End Developer"
              imgSrc={Thona}
              imgAlt="Thona"
            />
            <AboutCard
              name="Khuy LyRothanak"
              position="Front End Developer"
              imgSrc={Rothanak}
              imgAlt="Rothanak"
            />
          </div>
        </section>
      </div>
    </>
  );
}