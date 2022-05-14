import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { selectSubreddit, getSubredditInfAsync, selectSubredditIsLoading } from './SubredditSlice';
import SubredditInfo from '../../components/SubredditInfo';

function SubredditContainer() {
  const dispatch = useDispatch();
  const subredditData = useSelector(selectSubreddit);
  const subredditIsLoading = useSelector(selectSubredditIsLoading);
  const params = useParams();
  const str = params.subreddit;

  useEffect(() => {
    dispatch(getSubredditInfAsync(str));
  }, [dispatch, str]);

  if (subredditIsLoading) {
    return (
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" height={200} width={300} />
      </div>
    );
  }
  return (
    <div>
      <SubredditInfo data={subredditData} />
    </div>
  );
}

export default SubredditContainer;
