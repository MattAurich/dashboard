import React from 'react';
import PropTypes from 'prop-types';

const BrandyList = ({brandies}) => {  
  return (
      <ul className="list-group">
        {brandies.map(brandy => 
          <li className="list-group-item" key={brandy._id}>
            {brandy.pageName}
          </li>
        )}
      </ul>
  );
};

BrandyList.propTypes = {  
  brandies: PropTypes.array.isRequired
};

export default BrandyList; 
