import { configureStore } from '@reduxjs/toolkit';
import  postsSlice  from '../features/Posts/PostsSlice';
import  commentsSlice  from '../features/Comments/CommentsSlice.js';
import subredditSlice from '../features/Subreddit/SubredditSlice';
import searchCommunitiesSlice from '../features/SearchCommunities/SearchCommunitiesSlice';
import homePageSlice from '../features/HomePage/HomePageSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    comments: commentsSlice,
    subreddit: subredditSlice,
    searchCommunities:searchCommunitiesSlice,
    homePage: homePageSlice
  },
});
