import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  postsSlice  from '../features/Posts/PostsSlice';
import  commentsSlice  from '../features/Comments/CommentsSlice.js';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
    comments: commentsSlice
  },
});
