import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";

const initialUserState = {
  myProfile: null,
  myPosts: [],
  isProfileCreated: false,
  userProfile: {},
  userPosts: [],
  usersProfile: [],
  loading: true,
  error: {},
};

export const getMyProfile = createAsyncThunk("user/getMyProfile", async () => {
  const response = await api.get("/profile/me");
  return response.data;
});

export const updateMyProfile = createAsyncThunk(
  "user/updateMyProfile",
  async (profileData) => {
    const response = await api.post("/profile", profileData);
    return response.data;
  }
);

export const getMyPosts = createAsyncThunk("user/getMyPosts", async (user) => {
  const response = await api.get(`/posts/user/${user._id}`);
  return response.data;
});

export const getUserPosts = createAsyncThunk(
  "user/getUserPosts",
  async (id) => {
    const response = await api.get(`/posts/user/${id}`);
    return response.data;
  }
);

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (id) => {
    const response = await api.get(`/profile/user/${id}`);
    return response.data;
  }
);

// export const getAllProfiles = createAsyncThunk("auth/getAllProfiles", async (state, postData) => {
//   const response = await api.post("/profile");
//   return response.data;
// });

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
  extraReducers: {
    [getMyProfile.fulfilled]: (state, { payload }) => {
      state.myProfile = payload;
      state.loading = false;
      state.isProfileCreated = true;
      console.log(payload, "my profile");
    },
    [getMyProfile.rejected]: (state, { payload }) => {
      state.loading = false;
      state.profile = null;
      state.isProfileCreated = false;
      console.log(payload, "my profile");
    },
    [getUserProfile.fulfilled]: (state, { payload }) => {
      state.userProfile = payload;
      state.loading = false;
      console.log(payload, "created post");
    },
    [updateMyProfile.fulfilled]: (state, { payload }) => {
      state.myProfile = payload;
      state.loading = false;
      state.isProfileCreated = true;
      console.log(payload, "updated Profile");
    },
    [getMyPosts.fulfilled]: (state, { payload }) => {
      state.myPosts = payload;
      state.loading = false;
      console.log(payload, "created post");
    },
    [getUserPosts.fulfilled]: (state, { payload }) => {
      state.userPosts = payload;
      state.loading = false;
      console.log(payload, "created post");
    },
  },
});

export default userSlice;
export const userActions = userSlice.actions;
