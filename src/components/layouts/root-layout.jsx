import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Nav from "./navbar-beforeLogin";
import NavBar from "./navbar-afterLogin";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../features/api/apiSlice";

export default function RootLayout() {
  const { isAuthenticated, accessToken } = useSelector((state) => state.auth);
  const { isError } = useGetUserQuery(undefined, { skip: !accessToken });

  const isLoggedIn = isAuthenticated && !isError;

  return (
    <div className="bg-[#f5f5f5]">
      {isLoggedIn ? <NavBar /> : <Nav />}
      <Outlet />
      <Footer />
    </div>
  );
}