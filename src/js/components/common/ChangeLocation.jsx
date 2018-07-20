import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/locationActions';

class ChangeLocation extends React.Component {

  componentWillReceiveProps(nextProp) {
    this.props.actions.locationChange(nextProp.location);
  } 

  render() {
    if (this.props.location.redirect) {
      return (<Redirect to={this.props.location.redirectTo} />);
    }

    return null;
  }
}


function mapStateToProps(state) {
  return {
    location: state.location,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}


ChangeLocation.propTypes = {
  location: PropTypes.shape({
    redirect: PropTypes.bool.isRequired,
    redirectTo: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    locationChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLocation);
