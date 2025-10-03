import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Provider } from "react-redux"; 
import { store } from "./store"; 
import "./index.css";
import Register from "./pages/auth/register";



const RootApp = () => (
  <Provider store={store}>
    <BrowserRouter>
     <Register />
    </BrowserRouter>
  </Provider>
);

ReactDOM.createRoot(document.getElementById("root")).render(<RootApp />);
