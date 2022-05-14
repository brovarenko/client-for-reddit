import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectPosts, getPostsAsync, selectPostsIsLoading, increment, addPostsAsync,
} from './PostsSlice';
import Post from '../../components/Post';
import LoadingPost from '../../components/Loading/LoadingPost';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const postsIsLoading = useSelector(selectPostsIsLoading);
  const params = useParams();
  const limit = useSelector((state) => state.posts.limit);

  let name = `${params.subreddit}/${params.sort}`;

  if (name === 'undefined/undefined') {
    name = 'popular';
  }

  const data = { name, limit };

  useEffect(() => {
    dispatch(getPostsAsync(data));
  }, [dispatch, name, limit]);

  function loadPosts() {
    dispatch(increment());
    dispatch(addPostsAsync(data));
  }

  if (postsIsLoading) {
    return (
      <div className="posts-container">
        {Array.from(new Array(10)).map(() => (<LoadingPost />))}
      </div>
    );
  }

  return (
    <div className="posts-container">
      {posts.map((post) => (<Post key={post.data.id} post={post.data} />))}
      <button className="next-btn" onClick={() => loadPosts()} type="button">next</button>
    </div>
  );
}

export default Posts;
