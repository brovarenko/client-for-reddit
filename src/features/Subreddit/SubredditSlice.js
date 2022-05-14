import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Reddit from '../../api/Reddit';

const initialState = {
  isLoading: false,
  isError: false,
  subreddit: [],
};

export const getSubredditInfAsync = createAsyncThunk(
  'subreddit/getSubredditInfAsync',
  async (subreddit) => {
    const response = await Reddit.getSubredditInf(subreddit);
    return response;
  },
);

const subredditSlice = createSlice({
  name: 'subreddit',
  initialState,
  extraReducers: {
    [getSubredditInfAsync.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getSubredditInfAsync.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getSubredditInfAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.subreddit = action.payload;
    },
  },
});

export const selectSubreddit = (state) => state.subreddit.subreddit;
export const selectSubredditIsLoading = (state) => state.subreddit.isLoading;

export default subredditSlice.reducer;
