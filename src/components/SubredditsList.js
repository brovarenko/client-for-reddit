import React from "react";
import { Link } from "react-router-dom";
const SubredditsList = () => {
    return (
      
        <div className="subreddit-container">
            <div className="subreddit-header">Subreddit</div>
          <div>
            <Link to="/subredditPosts/netflix/hot">Netflix</Link>
          </div>
          <div>
            <Link to="/subredditPosts/wow/hot">Wow</Link>
          </div>
          <div>
            <Link to="/subredditPosts/AskReddit/hot ">Ask Reddit</Link>
          </div>
          <div>
            <Link to="/subredditPosts/worldnews/hot ">World News</Link>
          </div>
          
        
        </div>
        
    )
}

export default SubredditsList;