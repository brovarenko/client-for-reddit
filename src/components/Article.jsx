import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { getTime } from '../helpers/helpers';
import Score from './Score';

function Article({ currentPost }) {
  const post = currentPost;

  return (
    <div className="current-post">
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
        <p className="self-text">{post.selftext}</p>
        {post.is_video ? (
          <video
            src={post.media.reddit_video.fallback_url}
            width="400"
            controls
          >
            <track kind="captions" />
          </video>
        ) : (
          ''
        )}
      </div>
      <div className="post-footer">
        <div>
          <FontAwesomeIcon icon={faComment} />
          {post.num_comments}
          Comments
        </div>
      </div>
    </div>
  );
}

export default Article;
