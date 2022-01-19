import React from "react";
import Post from "../../components/Post";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectPosts } from "./HomePageSlice";
import { getPopularPostsAsync } from "./HomePageSlice";
import { selectPostsIsLoading } from "./HomePageSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    
    
    const post = useSelector(selectPosts)
    const postsIsLoading = useSelector(selectPostsIsLoading)
    
    
    useEffect(() => {
        
        dispatch(getPopularPostsAsync());
        
      }, [dispatch]);
      if (postsIsLoading) {
        return <div className="loading">Loading...</div>;
      }
    return ( 
      <div className="subreddit">
      <div className="posts-container">
           
             {post.map(post => 
                 (<Post key ={post.data.id} post={post.data} />)
            )} 
            
           
        </div>
        
        
      </div>
        
        
    )
};

export default HomePage;