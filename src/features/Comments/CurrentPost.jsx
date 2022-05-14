import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Article from '../../components/Article';
import { getPostsAsync, selectPostsIsLoading, selectPosts } from '../Posts/PostsSlice';
import Comments from './Commnets';
// import Posts from '../Posts/Posts';

function CurrentPost() {
  const dispatch = useDispatch();
  const postsIsLoading = useSelector(selectPostsIsLoading);
  const posts = useSelector(selectPosts);
  const param = useParams();
  const post = posts.filter((e) => e.data.id === param.articleId);

  useEffect(() => {
    dispatch(getPostsAsync(param.subreddit));
  }, [dispatch, param.subreddit]);

  if (postsIsLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div>
      <Article currentPost={post[0].data} />
      <Comments />
    </div>
  );
}

export default CurrentPost;
