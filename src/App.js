import React from 'react';
import './App.css';
import Posts from './features/Posts/Posts';
import Comments from './features/Comments/Commnets';
import Subreddits from './components/Subreddits';
import Header from './components/Header';

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
  
  
  <Subreddits/>

  <Routes>
  
  
  <Route path="/subreddit/:id/:sort" element={ <Posts />}/>
  <Route path="comments/:subreddit/:articleId" element={ <Comments />}/>
  </Routes>
</div>
</BrowserRouter>
);
 

  
}

export default App;
