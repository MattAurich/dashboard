import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import * as brandyActions from '../../actions/brandyActions';
import BrandyList from './BrandyList';

class Brandies extends React.Component {  
  render() {
    const brandies = this.props.brandies;
    return (
      <div className="col-md-12">
        <h1>Brandies</h1>
        <div className="col-md-4">
          <BrandyList brandies={brandies} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
}


Brandies.propTypes = {
  brandies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    brandies: state.brandies
  };
} 

export default connect(mapStateToProps)(Brandies);
