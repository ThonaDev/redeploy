import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Nav from "./navbar-beforeLogin";
import NavBar from "./navbar-afterLogin";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../features/api/apiSlice";
import { ToastContainer } from "react-toastify";

export default function RootLayout() {
  const { isAuthenticated, accessToken } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess } = useGetUserQuery(undefined, {
    skip: !accessToken || !isAuthenticated,
  });

  // Debug logging
  console.log("RootLayout state:", {
    isAuthenticated,
    accessToken,
    isLoading,
    isError,
    isSuccess,
  });

  // Render NavBar if authenticated and user fetch is successful, otherwise Nav
  const isLoggedIn = isAuthenticated && accessToken && isSuccess && !isError;

  return (
    <div className="bg-[#f5f5f5]">
      {isLoggedIn ? <NavBar /> : <Nav />}
      <Outlet />
      <Footer />
    </div>
  );
}
