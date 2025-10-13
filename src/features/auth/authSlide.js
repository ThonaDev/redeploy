import { createSlice } from "@reduxjs/toolkit";

// Redux Slice for Auth State Management
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // Optional: Store user data after login (e.g., { id, email, name })
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, refreshToken, user } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = user || null; // If server returns user info, store it
      state.isAuthenticated = !!accessToken;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
    // Optional: Add more reducers, e.g., for logout or user updates
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
//export default authSlice.reducer;