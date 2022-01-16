import React from "react";
import { getNumber } from "../helpers/helpers";
import { getCreatedDate } from "../helpers/helpers";

const SubredditInfo = ({data}) => {
    return (
    <div className="subreddit-info"> 
    <div className="subreddit-header">
    About Community
    </div>
    <div className="subreddit-body">
    {data.public_description}
    </div>
     <div className="subreddit-members">{getNumber(data.subscribers)} Members   </div>
     <div className="subreddit-online"> {data.active_user_count} Online  </div>
     <div className="subreddit-created">Created {getCreatedDate(data.created)}</div>
    </div>
    )
}

export default SubredditInfo;
