import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router";

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      <Navigate to="/home" />;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
