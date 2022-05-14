import React from 'react';
import { Link } from 'react-router-dom';

function SubredditsList() {
  return (
    <div className="subreddit-container">
      <div className="subreddit-header">Subreddit</div>
      <div>
        <Link to="/subredditPosts/gaming/hot">gaming</Link>
      </div>
      <div>
        <Link to="/subredditPosts/pcmasterrace/hot">pcmasterrace</Link>
      </div>
      <div>
        <Link to="/subredditPosts/AskReddit/hot ">ask reddit</Link>
      </div>
      <div>
        <Link to="/subredditPosts/worldnews/hot ">world news</Link>
      </div>
      <div>
        <Link to="/subredditPosts/pics/hot ">pics</Link>
      </div>
      <div>
        <Link to="/subredditPosts/technology/hot ">technology</Link>
      </div>
    </div>
  );
}

export default SubredditsList;
