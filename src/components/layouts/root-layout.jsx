import React from "react";
import { Outlet } from "react-router";
import Footer from "./footer";
import Nav from "./navbar-beforeLogin";

export default function RootLayout() {
  return (
    <div className="bg-[#f5f5f5]">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
