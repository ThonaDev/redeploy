import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SingleJobCard from "./components/card/jobs/single-job-card.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login.jsx";
import ForgotPassword from "./pages/auth/forgotPassword.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      < ForgotPassword/>
    </Provider>
  </StrictMode>
);
