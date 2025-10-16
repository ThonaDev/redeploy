import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../components/layouts/navbar-afterLogin";
import Herosection from "./herosection";
import FindJobPage from "./find-job-page";
import ThreeStepCard from "./stepcard";
import FeatureJob from "./featureJob";
import BenefitsData from "./benefitsData";

const Homepage = () => {
  return (
    <section className="">
      <Herosection/>
      <ThreeStepCard/>
      <FeatureJob/>
      <BenefitsData/>
    </section>
  );
};

export default Homepage;
