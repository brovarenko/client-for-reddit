import React from "react";
import { Link } from "react-router-dom";
const Subreddits = () => {
    return (
      
        <div className="subreddit-container">
            
          <div>
            <Link to="/subreddit/netflix/hot">Netflix</Link>
          </div>
          <div>
            <Link to="/subreddit/wow/hot">Wow</Link>
          </div>
          <div>
            <Link to="/subreddit/AskReddit/hot ">Ask Reddit</Link>
          </div>
          <div>
            <Link to="/subreddit/worldnews/hot ">World News</Link>
          </div>
          
        
        </div>
        
    )
}

export default Subreddits;