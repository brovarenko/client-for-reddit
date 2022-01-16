import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire,faCertificate,faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import {
    Link,
    useParams
  } from "react-router-dom";
const SortBar = () => {
    let params = useParams();
    
    let hotClass = 'black'
    let newClass = 'black'
    let topClass = 'black'
    if(params.sort === 'hot'){
        hotClass ='red'
    } else if (params.sort === 'new'){
        newClass ='red'
    } else if(params.sort === 'top'){
        topClass ='red'
    }
    
    return (
    <div className="sort-bar">
        <Link to={`/subredditPosts/${params.subreddit}/hot`}><FontAwesomeIcon icon={faFire} className={hotClass}/> Hot</Link>
        <Link to={`/subredditPosts/${params.subreddit}/new`}><FontAwesomeIcon icon={faCertificate} className={newClass}/> New</Link>
        <Link to={`/subredditPosts/${params.subreddit}/top`}><FontAwesomeIcon icon={faArrowCircleUp} className={topClass}/> Top</Link>
    </div>
    )
}

export default SortBar;