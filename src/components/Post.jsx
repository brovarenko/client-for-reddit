import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Score from './Score';
import { getTime } from '../helpers/helpers';

function Post({ post }) {
  return (
    <Link to={`/comments/${post.subreddit}/${post.id}`} className="post-container">
      <div className="post-score">
        <Score score={post.score} />
      </div>
      <div className="post-header">
        Posted by
        {post.author}
        {getTime(post)}
      </div>
      <div className="post-main">
        <h4>{post.title}</h4>
        <img src={post.url} alt="" className="post-image" />
        <p className="self-text">{post.selftext.substring(0, 400)}</p>
        {post.selftext.length > 400 ? <p className="self-text-end">{post.selftext.substring(400, 600)}</p> : null}
        {post.is_video ? <video src={post.media.reddit_video.fallback_url} width="400" controls><track kind="captions" /></video> : ''}
        { (post.media && post.media.type === 'youtube.com') ? parse(post.media.oembed.html) : ''}
      </div>
      <div className="post-footer">
        <div className="comment-btn">
          <FontAwesomeIcon icon={faComment} />
          <span className="post-num">{post.num_comments}</span>
          <span>Comments</span>
        </div>
      </div>
    </Link>
  );
}

export default Post;
