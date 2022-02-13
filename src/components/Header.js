import React from "react";
import logo from '../images/logo.png'
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
        <Link to="/">  <img src={logo} alt=""></img> </Link>
        <Search/>
        </div>
    );
}

export default Header;