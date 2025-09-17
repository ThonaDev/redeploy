import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import NotFoundPage from "./pages/auth/pagenotfound";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgotPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotFoundPage />
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
    </BrowserRouter>
  </React.StrictMode>
);
