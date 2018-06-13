import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <NavLink to="/" activeClassName="active">Home</NavLink>
    {' | '}
    <Link to="/pages">Pages</Link>
  </nav>
);

export default Header;
