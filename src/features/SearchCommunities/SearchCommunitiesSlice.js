import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Reddit from '../../api/Reddit';

const initialState = {
  isLoading: false,
  isError: false,
  searchCommunities: [],
};

export const getSearchCommunities = createAsyncThunk(
  'searchCommunities/getSearchCommunities',
  async (term) => {
    const response = await Reddit.searchCommunities(term);
    return response;
  },
);

const searchCommunitiesSlice = createSlice({
  name: 'searchCommunities',
  initialState,
  extraReducers: {
    [getSearchCommunities.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getSearchCommunities.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getSearchCommunities.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.searchCommunities = action.payload;
    },
  },
});

export const selectSearchCommunities = (state) => state.searchCommunities.searchCommunities;
export const selectSearchCommunitiesIsLoading = (state) => state.searchCommunities.isLoading;

export default searchCommunitiesSlice.reducer;
