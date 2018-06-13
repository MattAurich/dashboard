import React from 'react';
import PropTypes from 'prop-types';

const SectionList = ({ sections }) => (
  <div>
    <h3>Sections</h3>
    <ul>
      {sections.map(section =>
        <li key={section.id}>{section.content}</li>)}
    </ul>
  </div>
);

SectionList.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SectionList;
