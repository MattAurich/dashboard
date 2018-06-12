import React from 'react';  
import { NavLink, Link } from 'react-router-dom';

const Header = () => {  
  return (
    <nav>
      <NavLink to="/" 
        activeClassName="active">Home</NavLink>
      {" | "}
      <Link to="/pages">Pages</Link>
      {" | "}
      <Link to="/pages/5b1f1a6dd336055c6d5a2ae8">A Page</Link>
    </nav>
  );
};

export default Header;
