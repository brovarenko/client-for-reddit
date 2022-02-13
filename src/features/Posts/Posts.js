import React from "react";
import Post from "../../components/Post";
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from "./PostsSlice";
import { getPostsAsync } from "./PostsSlice";
import { selectPostsIsLoading } from "./PostsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SortBar from "../../components/SortBar";
import { getSubredditInfAsync } from "../Subreddit/SubredditSlice";
import { selectSubreddit, selectSubredditIsLoading } from "../Subreddit/SubredditSlice";
import SubredditInfo from "../../components/SubredditInfo";

const Posts = () => {
    const dispatch = useDispatch();
    const post = useSelector(selectPosts);
    const postsIsLoading = useSelector(selectPostsIsLoading);
    const subredditData = useSelector(selectSubreddit);
    const subredditIsLoading = useSelector(selectSubredditIsLoading);
    let params = useParams();
    let str = `${params.subreddit}/${params.sort}`;
    let str1 = params.subreddit;

    useEffect(() => {
        dispatch(getPostsAsync(str));
        dispatch(getSubredditInfAsync(str1));
      }, [dispatch,str,str1]);

      if (postsIsLoading || subredditIsLoading) {
        return <div className="loading">Loading...</div>;
      };

    return ( 
      <div className="subreddit">
      <div className="posts-container">
           <SortBar/>
             {post.map(post => 
                 (<Post key ={post.data.id} post={post.data} />)
            )} 
      </div>
        <SubredditInfo data={subredditData}/>
      </div>  
    );
};

export default Posts;