import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authReducer from "./features/auth/authSlide";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;