import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SectionList from './SectionList';
import Section from './Section';
import CreateSection from './CreateSection';


const Sections = (props) => {
  const { sections } = props;

  return (
    <div className="col-md-12">
      <h1>Sections
        <Link to="/sections/create" className="btn btn-primary">
          + section
        </Link>
      </h1>
      <div className="col-md-4">
        <SectionList sections={sections} />
      </div>
      <div className="col-md-7 col-md-offset-1">
        <Switch>
          <Route exact path="/sections/create" component={CreateSection} />
          <Route path="/sections/:id" component={Section} />
        </Switch>
      </div>
    </div>
  );
};


Sections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    sections: state.sections,
  };
}

export default connect(mapStateToProps)(Sections);
