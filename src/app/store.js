import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  postsSlice  from '../features/Posts/PostsSlice';
import  commentsSlice  from '../features/Comments/CommentsSlice.js';
import subredditSlice from '../features/Subreddit/SubredditSlice';
import searchCommunitiesSlice from '../features/SearchCommunities/SearchCommunitiesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
    comments: commentsSlice,
    subreddit: subredditSlice,
    searchCommunities:searchCommunitiesSlice
  },
});
