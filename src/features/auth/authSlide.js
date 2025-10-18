import { createSlice } from "@reduxjs/toolkit";
import { getDecryptedAccessToken, getDecryptedRefreshToken } from "../../utils/tokenUtils";

const initialState = {
  user: null,
  accessToken: getDecryptedAccessToken() || null,
  refreshToken: getDecryptedRefreshToken() || null,
  isAuthenticated: !!getDecryptedAccessToken(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, refreshToken, user } = action.payload;
      state.accessToken = accessToken || state.accessToken;
      state.refreshToken = refreshToken || state.refreshToken;
      state.user = user || state.user;
      state.isAuthenticated = !!accessToken || state.isAuthenticated;
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