import React from "react";
import Post from "../../components/Post";
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from "./PostsSlice";
import { getPostsAsync } from "./PostsSlice";
import { selectPostsIsLoading } from "./PostsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SortBar from "../../components/SortBar";
const Posts = () => {
    const dispatch = useDispatch();
    
    
    const post = useSelector(selectPosts)
    const postsIsLoading = useSelector(selectPostsIsLoading)
    let params = useParams();
    let str = `${params.id}/${params.sort}`
    useEffect(() => {
        
       
        dispatch(getPostsAsync(str));
       
      }, [dispatch,str]);
      if (postsIsLoading) {
        return <div className="loading">Loading...</div>;
      }
    return ( 
      
        <div className="posts-container">
           
           <SortBar/>
             {post.map(post => 
                 (<Post key ={post.data.id} post={post.data} />)
            )} 
            
            
           
        </div>
        
    )
};

export default Posts;