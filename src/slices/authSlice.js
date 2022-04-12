import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router";
import api from "../utils/api";

const initialAuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
};

// Creating Register User Thunk
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (signupData, getState) => {
    const response = await api.post("/users", signupData);
    localStorage.setItem("token", response.data.token);
    return response.data;
  }
);

// Creating Login User Thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, getState, dispatch) => {
    const response = await api.post("/auth", loginData);
    localStorage.setItem("token", response.data.token);
    return response.data;
  }
);

export const loadUser = createAsyncThunk("auth/loadUser", async (state) => {
  const response = await api.get("/auth");
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout(state) {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.token = payload;
      state.loading = false;
      state.isAuthenticated = true;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.token = payload;
      // console.log(payload, "payload");
    },
    [loadUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.isAuthenticated = true;
      console.log(payload, "payload");

    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
