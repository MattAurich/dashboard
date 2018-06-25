import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ChangeLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {
        reidrect: false,
        redirectTo: '',
      }
    }
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      location: {
        redirect: false,
        redirectTo: '',
      }
    });
  } 

  render() {
    if (this.props.location.redirect) {
      return (<Redirect to={this.props.location.redirectTo} />);
    }

    return null;
  }
}


function mapStateToProps(state) {
  console.log(state)
  return {
    location: state.location,
  };
}


ChangeLocation.propTypes = {
  location: PropTypes.shape({
    redirect: PropTypes.bool.isRequired,
    redirectTo: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ChangeLocation);
