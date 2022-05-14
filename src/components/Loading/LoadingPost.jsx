import React from 'react';
import { Skeleton } from '@mui/material';
import './loadingPost.css';

function LoadingPost() {
  return (
    <div className="post">
      <div className="score">
        <Skeleton variant="rectangular" height={100} />
      </div>
      <div className="main">
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" height={50} />
        <Skeleton variant="text" />
      </div>
    </div>
  );
}
export default LoadingPost;
