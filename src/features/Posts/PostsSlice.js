/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Reddit from '../../api/Reddit';

const initialState = {
  isLoading: false,
  isError: false,
  posts: [],
  limit: 15,
};

export const getPostsAsync = createAsyncThunk(
  'posts/getPostsAsync',
  async (subreddit) => {
    const response = await Reddit.getPosts(subreddit);
    return response;
  },
);
export const addPostsAsync = createAsyncThunk(
  'posts/addPostsAsync',
  async (subreddit) => {
    const response = await Reddit.addPosts(subreddit);
    return response;
  },
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    increment(state) {
      state.limit += 10;
    },
  },
  extraReducers: {
    [getPostsAsync.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getPostsAsync.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getPostsAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.posts = action.payload;
    },
    [addPostsAsync.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const selectPosts = (state) => state.posts.posts;
export const { increment } = postsSlice.actions;
export const selectPostsIsLoading = (state) => state.posts.isLoading;

export default postsSlice.reducer;
