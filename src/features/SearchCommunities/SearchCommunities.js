import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchCommunities } from "./SearchCommunitiesSlice";
import { getSearchCommunities } from "./SearchCommunitiesSlice";
import { selectSearchCommunitiesIsLoading } from "./SearchCommunitiesSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Community from "../../components/Community";
import LoadingList from "../../components/Loading/LoadingList";

const SearchCommunities = () => {
    const dispatch = useDispatch();
    const communitiesData = useSelector(selectSearchCommunities);
    const communitiesIsLoading = useSelector(selectSearchCommunitiesIsLoading);
    let params = useParams();
    let str = params.term;
  
    useEffect(() => {
        dispatch(getSearchCommunities(str));
      }, [dispatch,str]);

      if ( communitiesIsLoading) {
        return <LoadingList/>
      };

    return ( 
        <div className="communities">
        {communitiesData.map(e => 
           (<Community key ={e.data.id} data={e.data} />)
        )} 
        </div>
        
    );
}

export default SearchCommunities;