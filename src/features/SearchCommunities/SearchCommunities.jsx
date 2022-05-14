import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectSearchCommunities, getSearchCommunities, selectSearchCommunitiesIsLoading } from './SearchCommunitiesSlice';
import Community from '../../components/Community';
import LoadingList from '../../components/Loading/LoadingList';

function SearchCommunities() {
  const dispatch = useDispatch();
  const communitiesData = useSelector(selectSearchCommunities);
  const communitiesIsLoading = useSelector(selectSearchCommunitiesIsLoading);
  const params = useParams();
  const str = params.term;

  useEffect(() => {
    dispatch(getSearchCommunities(str));
  }, [dispatch, str]);

  if (communitiesIsLoading) {
    return <LoadingList />;
  }

  return (
    <div className="communities">
      {communitiesData.map((e) => (<Community key={e.data.id} data={e.data} />))}
    </div>
  );
}

export default SearchCommunities;
