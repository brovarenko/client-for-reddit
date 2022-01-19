import React from 'react';
import './App.css';
import Posts from './features/Posts/Posts';
import Comments from './features/Comments/Commnets';
import SubredditsList from './components/SubredditsList';
import Header from './components/Header';
import SearchCommunities from './features/SearchCommunities/SearchCommunities';
import HomePage from './features/HomePage/HomePage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  
return (
  <BrowserRouter>
  <Header/>
  
  <div className="app">
  
  
  <SubredditsList/>
  
  <Routes>
  
  <Route path="/" element={ <HomePage />}/>
  <Route path="subredditPosts/:subreddit/:sort" element={ <Posts />}/>
  <Route path="comments/:subreddit/:articleId" element={ <Comments />}/>
  <Route path="search/:term" element={ <SearchCommunities />}/>
  </Routes>
  
</div>
</BrowserRouter>
);
 

  
}

export default App;
