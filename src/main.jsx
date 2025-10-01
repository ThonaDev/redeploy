import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SingleJobCard from "./components/card/jobs/single-job-card.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import About from "./pages/jobs/aboutUs.jsx";
import FindJob from "./pages/jobs/find-job-page.jsx";
import Homepage from "./pages/jobs/homepage.jsx";
import ContactUs from "./pages/jobs/contactUs.jsx";
import NavBar from "./components/layouts/navbar-afterLogin.jsx";
import Nav from "./components/layouts/navbar-beforeLogin.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Profile from "./pages/jobs/profile-details.jsx";
import Mysavedjobs from "./pages/jobs/mysaved-job.jsx";
import Register from "./pages/auth/register.jsx";
import Login from "./pages/auth/login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Nav />
        {/* <NavBar /> */}
        {/* <About/> */}
        <Routes>
          <Route>
            <Route path="/" element={<Homepage />} />
            <Route path="/jobs" element={<FindJob />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/saved-jobs" element={<Mysavedjobs />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
