import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SingleJobCard from "./components/card/jobs/single-job-card.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Footer from "./components/layouts/footer.jsx";
import JobDetailsPage from "./pages/jobs/job-details-page.jsx"
import BenefitsData from "./pages/jobs/benefitsData.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <SingleJobCard /> */}
      {/* <JobDetail/> */}
      <JobDetailsPage />
     <Footer/>
     <BenefitsData />
    </Provider>
  </StrictMode>
);
