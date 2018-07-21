import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SectionList = ({ sections }) => (
  <ul className="list-group">
    {sections.map(section => (
      <li className="list-group-item" key={section.id}>
        <Link to={`/sections/${section.id}`}>{section.name}</Link>
      </li>))
    }
  </ul>
);

SectionList.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SectionList;
