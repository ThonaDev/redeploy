import { createSlice } from "@reduxjs/toolkit";
import { getDecryptedAccessToken, getDecryptedRefreshToken } from "../../utils/tokenUtils";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: getDecryptedAccessToken() || null,
    refreshToken: getDecryptedRefreshToken() || null,
    isAuthenticated: !!getDecryptedAccessToken(),
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, refreshToken, user } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = user || null;
      state.isAuthenticated = !!accessToken;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;