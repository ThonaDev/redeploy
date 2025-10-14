import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SingleJobCard from "./components/card/jobs/single-job-card.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Footer from "./components/layouts/footer.jsx";
import Homepage from "./pages/jobs/homepage.jsx";
import About from "./pages/jobs/aboutUs.jsx";
import ContactUs from "./pages/jobs/contactUs.jsx";
import Nav from "./components/layouts/navbar-beforeLogin.jsx";
import FindJob from "./pages/jobs/find-job-page.jsx";
import JobDetailsPage from "./pages/jobs/job-details-page.jsx";
import BenefitsData from "./pages/jobs/benefitsData.jsx";
import StepCard from "./pages/jobs/stepcard.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Nav/>
        {/* <BenefitsData /> */}
        {/* <NavBar /> */}
        {/* <App /> */}
        {/* <SingleJobCard /> */}
        {/* <JobDetail/> */}
        {/* <JobDetailsPage /> */}
        <Routes>
          <Route>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About/>} />
            <Route path="/jobs" element={<FindJob/>} />
            <Route path="/contact" element={<ContactUs/>} />
            {/* <Route path="/jobs" element={<FindJob />} /> */}
          </Route>
        </Routes>
      
        <Footer />
          <StepCard/>
      </Router>
    </Provider>
  </StrictMode>
);
