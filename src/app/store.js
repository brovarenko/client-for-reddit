import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/Posts/PostsSlice';
import commentsSlice from '../features/Comments/CommentsSlice';
import subredditSlice from '../features/Subreddit/SubredditSlice';
import searchCommunitiesSlice from '../features/SearchCommunities/SearchCommunitiesSlice';

const store = configureStore({
  reducer: {
    posts: postsSlice,
    comments: commentsSlice,
    subreddit: subredditSlice,
    searchCommunities: searchCommunitiesSlice,
  },
});

export default store;
