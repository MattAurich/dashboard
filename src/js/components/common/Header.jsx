import React from 'react';  
import { NavLink, Link } from 'react-router-dom';

const Header = () => {  
  return (
    <nav>
      <NavLink to="/" activeClassName="active">Home</NavLink>
      {' | '}
      <Link to="/pages">Pages</Link>
      {' | '}
      <Link to="/pages/5b1fd49034e55d6570cf2479">A Page</Link>
    </nav>
  );
};

export default Header;
