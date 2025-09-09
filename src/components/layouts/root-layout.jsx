import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router";
import Footer from "./footer";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
