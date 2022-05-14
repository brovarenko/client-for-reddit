import React from 'react';
import { getNumber, getCreatedDate } from '../helpers/helpers';

function SubredditInfo({ data }) {
  return (
    <div className="subreddit-info">
      <div className="subreddit-header">
        About Community
      </div>
      <div className="subreddit-body">
        <span className="sub-inf">{data.public_description}</span>
      </div>
      <div className="subreddit-members">
        <span className="sub-inf">{getNumber(data.subscribers)}</span>
        Members
      </div>
      <div className="subreddit-online">
        <span className="sub-inf">{data.active_user_count}</span>
        Online
      </div>
      <div className="subreddit-created">
        Created
        <span className="sub-inf">{getCreatedDate(data.created)}</span>
      </div>
    </div>
  );
}

export default SubredditInfo;
