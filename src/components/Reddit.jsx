import React from 'react';
import Posts from '../features/Posts/Posts';
import SubredditContainer from '../features/Subreddit/SubredditContainer';
import SortBar from './SortBar';

function Reddit() {
  return (
    <div className="subreddit">
      <div className="posts-container">
        <SortBar />
        <Posts />
      </div>
      <SubredditContainer />
    </div>
  );
}

export default Reddit;
