import React from "react";
import Comment from "../../components/Comment";
import { useDispatch, useSelector } from 'react-redux';
import { selectComments } from "./CommentsSlice";
import { getCommentsAsync } from "./CommentsSlice";
import { selectISLoading } from "./CommentsSlice";
import { selectPosts } from "../Posts/PostsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Article from "../../components/Article";
import { getPostsAsync } from "../Posts/PostsSlice";
import { selectPostsIsLoading } from "../Posts/PostsSlice";

const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const commentsIsLoading = useSelector(selectISLoading);
    const postsIsLoading = useSelector(selectPostsIsLoading);
    const posts  =  useSelector(selectPosts);
    let param = useParams();
    const currentPost = posts.filter(post => post.data.id === param.articleId);
    
    
    let str = `${param.subreddit}/comments/${param.articleId}/`;
   
    useEffect(() => {
        dispatch(getCommentsAsync(str));
        dispatch(getPostsAsync(param.subreddit));
      }, [dispatch,str,param.subreddit]);

      if (commentsIsLoading || postsIsLoading) {
        return <div className="loading">Loading...</div>
       } else if (currentPost.length === 0){
         return null
       }

    return ( 
        <div> 
         <Article currentPost={currentPost[0].data}/>
        <div className="comments-container">
            <section >
             {comments.map(comments => 
                 (<Comment key ={comments.data.id} comment={comments.data} />)
            )} 
            </section>
        </div>
        </div>
        
    );
};

export default Comments;