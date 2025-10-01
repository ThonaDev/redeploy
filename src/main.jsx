import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Provider } from "react-redux"; 
import { store } from "./store"; 
import App from "./App";
import "./index.css";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

// Redirect wrapper to check localStorage flag
function RedirectWrapper({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const shouldRedirect = localStorage.getItem("redirectToLogin");
    if (shouldRedirect) {
      localStorage.removeItem("redirectToLogin"); // clear flag
      navigate("/login");
    }
  }, [navigate]);

  return children;
}

const RootApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <RedirectWrapper>
        {/* <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes> */}

        <Routes>
  {/* If redirectToLogin flag exists, go straight to login */}
  <Route
    path="/"
    element={
      localStorage.getItem("redirectToLogin") ? <Login /> : <Register />
    }
  />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
</Routes>

      </RedirectWrapper>
    </BrowserRouter>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
