import React from 'react';
import PropTypes from 'prop-types';

const PageList = ({pages}) => {  
  return (
      <ul className="list-group">
        {pages.map(page => 
          <li className="list-group-item" key={page._id}>
            {page.id}
          </li>
        )}
      </ul>
  );
};

PageList.propTypes = {  
  pages: PropTypes.array.isRequired
};

export default PageList; 
