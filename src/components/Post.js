import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import Score from "./Score";
import { Link } from "react-router-dom";
import { getTime } from "../helpers/helpers";
const Post = ({post}) => {
  
   
    return (
        <Link to={`/comments/${post.subreddit}/${post.id}`} className="post-container">
         
            <div className="post-score">
            <Score score={post.score}/>
            </div>
            <div className="post-header">
            Posted by {post.author} {getTime(post)}
            </div>
            <div className="post-main">
            <h4>{post.title}</h4>
            <img src={post.url} alt ="" className='post-image'></img>
            <p className="self-text">{post.selftext.substring(0,400)}</p>
            {post.selftext.length > 400 ? <p className="self-text-end">{post.selftext.substring(400,600)}</p> : null}
            {post.is_video ? <video src={post.media.reddit_video.fallback_url} width="400" controls></video> : ''}
            </div>
            <div className="post-footer">
            <div  className="comment-btn"><FontAwesomeIcon icon={faComment} /> {post.num_comments} Comments</div>
            </div>

            
            
           
            
        </Link>
    )
}

export default Post;