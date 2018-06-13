import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageList = ({ pages }) => {  
  return (
    <ul className="list-group">
      {pages.map(page => (
        <li className="list-group-item" key={page.id}>
          <Link to={`/pages/${page.id}`}>{page.details}</Link>
        </li>),
      )}
    </ul>
  );
};

PageList.propTypes = {  
  pages: PropTypes.array.isRequired
};

export default PageList;
