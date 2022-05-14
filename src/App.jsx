import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import CurrentPost from './features/Comments/CurrentPost';
import SubredditsList from './components/SubredditsList';
import Header from './components/Header';
import SearchCommunities from './features/SearchCommunities/SearchCommunities';
import Reddit from './components/Reddit';
import Posts from './features/Posts/Posts';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <SubredditsList />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="subredditPosts/:subreddit/:sort" element={<Reddit />} />
          <Route path="comments/:subreddit/:articleId" element={<CurrentPost />} />
          <Route path="search/:term" element={<SearchCommunities />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
