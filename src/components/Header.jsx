import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Search from './Search';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <Search />
    </div>
  );
}

export default Header;
