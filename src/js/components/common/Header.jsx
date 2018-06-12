import React from 'react';  
import { NavLink, Link } from 'react-router-dom';

const Header = () => {  
  return (
    <nav>
      <NavLink to="/" 
        activeClassName="active">Home</NavLink>
      {" | "}
      <Link to="/brandies">Brandies</Link>
      {" | "}
      <Link to="/brandies/5b17f90f81ff743f8593659e">A Brandy</Link>
    </nav>
  );
};

export default Header;
