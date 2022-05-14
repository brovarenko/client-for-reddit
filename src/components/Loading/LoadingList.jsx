import React from 'react';
import Loading from './Loading';

function LoadingList() {
  return (
    <div className="loading-list-communites">
      {Array.from(new Array(10)).map(() => (<Loading />))}
    </div>
  );
}

export default LoadingList;
