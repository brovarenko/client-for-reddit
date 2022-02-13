import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Reddit from '../../util/Reddit';

const initialState = {
    isLoading: false,
    isError: false,
    posts: []
};

export const getPopularPostsAsync = createAsyncThunk(
  'homePage/getPopularPostsAsync',
  async () => {
    const response = await Reddit.getPopularPosts();
    return response;
  }
);

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  extraReducers: {
      [getPopularPostsAsync.pending]: (state) => {
        state.isLoading = true;
        state.isError = false;
      },
      [getPopularPostsAsync.rejected]: (state) => {
        state.isLoading = false;
        state.isError = true;
      },
      [getPopularPostsAsync.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.posts = action.payload
      }
  }
  
});

export const selectPosts = state => state.homePage.posts;
export const selectPostsIsLoading = state => state.homePage.isLoading;

export default homePageSlice.reducer;