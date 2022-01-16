import React from "react";
import { getNumber } from "../helpers/helpers";
import icon from '../images/icon.png'
import { Link } from "react-router-dom";
const Community = ({data}) => {
    return (
         <Link  to={`/subredditPosts/${data.display_name}/hot`}  className="community">
           <div className="community-icon"><img  src={data.icon_img?data.icon_img:icon} alt=""></img></div>
           <div className="community-name">{data.display_name_prefixed}</div>
           <div className="community-members">{ getNumber(data.subscribers) } Members</div>
           <div className="community-description">{data.public_description}</div>
        </Link>
    )
}

export default Community;