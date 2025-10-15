import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../components/layouts/navbar-afterLogin";
import Herosection from "./herosection";
import FindJobPage from "./find-job-page";

const Homepage = () => {
  return (
    <section className="">
      <Herosection/>
    </section>
  );
};

export default Homepage;
