import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import { authSlice } from "./features/auth/authSlide";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
// import { TypedUseSelectorHook } from "@reduxjs/toolkit"; // Remove this line in JS files

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer, // Add auth reducer for managing tokens, user, and isAuthenticated
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // apiSlice.middleware includes authApi since injected
});

setupListeners(store.dispatch);

// Hooks for use in components (e.g., useAppDispatch in Login.jsx)
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;