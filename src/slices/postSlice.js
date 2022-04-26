import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import api from "../utils/api";

const initialPostState = {
  posts: [],
  filteredPosts: null,
  post: null,
  page: 1,
  fetched: false,
  loading: true,
  error: {},
};

export const getPosts = createAsyncThunk("post/getPosts", async (page) => {
  const response = await api.get(`/posts?page=${page}`);
  return response.data;
});

export const getPost = createAsyncThunk("post/getPost", async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
});

export const getPostsByLocation = createAsyncThunk(
  "post/getPostsByLocation",
  async (location) => {
    const response = await api.get(`/posts/location/${location}`);
    return response.data;
  }
);

export const addPost = createAsyncThunk("posts/addPost", async (postData) => {
  console.log(postData, "postData");
  const response = await api.post("/posts", postData);
  return response.data;
});

export const updateLikes = createAsyncThunk(
  "posts/updateLikes",
  async (postId) => {
    const response = await api.put(`/posts/like-unlike/${postId}`);
    return { id: postId, data: response.data };
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, commentData }) => {
    console.log(postId, commentData, "comment");
    const response = await api.post(`/posts/comment/${postId}`, commentData);

    return response.data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    isPostsFetched(state, action) {
      state.fetching = action.payload;
    },
    infiniteScrollAddPage(state) {
      state.page = state.page + 1;
    },
    filterPostsByLocation(state, action) {
      state.filteredPosts = state.posts.filter(
        (post) => post.location === action.payload
      );
      console.log(state.filteredPosts, "filtered posts");
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.posts = state.posts.concat(payload);
      state.loading = false;
      state.fetched = false;
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.post = payload;
      state.loading = false;
      console.log(payload, "post");
    },
    [addPost.fulfilled]: (state, { payload }) => {
      state.posts = [payload, ...state.posts];
      state.loading = false;
      console.log(payload, "created post");
    },
    [updateLikes.fulfilled]: (state, { payload }) => {
      state.posts = [
        ...state.posts.map((post) => {
          return post._id === payload.id
            ? { ...post, likes: [...payload.data] }
            : post;
        }),
      ];
      state.loading = false;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.post = { ...state.post, comments: payload };
      state.loading = false;
      console.log(state.post, "comments post");
    },
    [getPostsByLocation.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
      state.fetched = false;
    },
  },
});

export default postSlice;
export const postActions = postSlice.actions;
