// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { Provider } from "react-redux"; 
// import { store } from "./store"; 
// import "./index.css";
// import Register from "./pages/auth/register";
// import Login from "./pages/auth/login";
// import ForgotPassword from "./pages/auth/forgotpassword";
// import ResetPassword from "./pages/auth/resetpassword";


// const RootApp = () => (
//   <Provider store={store}>
//     <BrowserRouter>
//      {/* <Register /> */}
//      {/* <Login /> */}
//      {/* <ForgotPassword/> */}
//       <ResetPassword/>
//     </BrowserRouter>
//   </Provider>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(<RootApp />);







import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";

// Import your pages
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword"; // ✅ new import

const RootApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* ✅ Set Register as default page */}
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

ReactDOM.createRoot(document.getElementById("root")).render(<RootApp />);
