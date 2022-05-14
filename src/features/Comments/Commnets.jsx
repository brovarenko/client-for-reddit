import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import Comment from '../../components/Comment';
import { selectISLoading, getCommentsAsync, selectComments } from './CommentsSlice';

function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const commentsIsLoading = useSelector(selectISLoading);
  const param = useParams();
  const str = `${param.subreddit}/comments/${param.articleId}/`;
  useEffect(() => {
    dispatch(getCommentsAsync(str));
  }, [dispatch, str]);

  if (commentsIsLoading) {
    return <div>{Array.from(new Array(10)).map(() => (<Skeleton className="loading-comment" variant="rectangular" height={60} />))}</div>;
  }
  return (
    <div className="comments-container">
      <section>
        {comments.map((comment) => (<Comment key={comment.data.id} comment={comment.data} />))}
      </section>
    </div>
  );
}

export default Comments;
