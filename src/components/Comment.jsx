import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { getTime } from '../helpers/helpers';

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment-header">
        {comment.author}
        {getTime(comment)}
      </div>
      <div>{comment.body}</div>
      <div>
        <FontAwesomeIcon className="arrow" icon={faLongArrowAltUp} />
        {comment.score}
        <FontAwesomeIcon className="arrow" icon={faLongArrowAltDown} />
      </div>
    </div>
  );
}

export default Comment;
