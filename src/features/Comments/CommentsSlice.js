import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Reddit from '../../api/Reddit';

const initialState = {
  isLoading: false,
  isError: false,
  comments: [],
};

export const getCommentsAsync = createAsyncThunk(
  'comments/getCommentsAsync',
  async (subreddit) => {
    const response = await Reddit.getPostComments(subreddit);
    return response;
  },
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentsAsync.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getCommentsAsync.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getCommentsAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.comments = action.payload;
    },
  },
});

export const selectComments = (state) => state.comments.comments;
export const selectISLoading = (state) => state.comments.isLoading;

export default commentsSlice.reducer;
