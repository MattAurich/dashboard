import React from 'react';
import PropTypes from 'prop-types';

const PageSections = ({ sections }) => (
  <div>
    <h3>Sections</h3>
    <ul>
      {sections.map(section =>
        <li key={section.id}>{section.name}</li>)}
    </ul>
  </div>
);

PageSections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PageSections;
