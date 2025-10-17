import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword";
import RootLayout from "./components/layouts/root-layout";
import FindJobPage from "./pages/jobs/find-job-page";
import About from "./pages/jobs/aboutUs";
import ContactUs from "./pages/jobs/contactUs";
import Profile from "./pages/jobs/profile-details";
import Mysavedjobs from "./pages/jobs/mysaved-job";
import Homepage from "./pages/jobs/homepage";
import ApplyJob from "./pages/jobs/applying-page";
import JobDetail from "./pages/jobs/job-details-page";
import { StrictMode } from "react";
import FreeLancerDetail from "./components/card/best_freelancer/bestfreelancer-card-details";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/jobs" element={<FindJobPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/saved-jobs" element={<Mysavedjobs />} />
            <Route path="/job-details/:jobUuid" element={<JobDetail />} />
            <Route path="/freelancer/:id" element={<FreeLancerDetail />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/apply" element={<ApplyJob />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);