import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  name, onChange, placeholder, value, label,
}) => (
  <div className="form-group">
    <div className="field">
      <label htmlFor={name}>{ label }
        <input
          type="text"
          id={name}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: null,
  value: null,
  label: null,
};

export default TextInput;
