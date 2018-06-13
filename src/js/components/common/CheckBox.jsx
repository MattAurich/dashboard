import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({
  item, handleChange,
}) => (
  <div className="field">
    <label htmlFor={item.id}>{item.content}
      <input
        type="checkbox"
        id={item.id}
        value={item.id}
        checked={item.checked}
        onChange={handleChange}
      />
    </label>
  </div>
);

CheckBox.propTypes = {  
  item: PropTypes.object.isRequired, 
  handleChange: PropTypes.func.isRequired
};

export default CheckBox;
