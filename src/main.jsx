import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SingleJobCard from "./components/card/jobs/single-job-card.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import About from "./pages/jobs/aboutUs.jsx";
import NavBar from "./components/layouts/navbar-afterLogin.jsx";
import Nav from "./components/layouts/navbar-beforeLogin.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <NavBar/> */}
      {/* <Nav/> */}
      {/* <App /> */}
      {/* <SingleJobCard />  */}
      <About/>
    </Provider>
  </StrictMode>
);
