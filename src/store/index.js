import { configureStore, createSlice } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import postSlice from "../slices/postSlice";


const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    post: postSlice.reducer
  },
});



export default store;
