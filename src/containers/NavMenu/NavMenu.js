import React from 'react';
import {NavLink} from "react-router-dom";
import './NavMenu.css';

const NavMenu = () => {
  return (
    <div className="container navBlock">
      <div className="mainTitle">
        <NavLink to="/" exact className="mainTitle"><h1>My Blog</h1></NavLink>
      </div>
      <div className="navLinks">
        <NavLink to="/" exact className="link">Quotes</NavLink>
        <NavLink to="/add-quote" className="link">Submit new quote</NavLink>
      </div>
    </div>
  );
};

export default NavMenu;