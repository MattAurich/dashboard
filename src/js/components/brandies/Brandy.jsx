import React from 'react';  
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Brandy extends React.Component {  
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.brandy.pageName}</h1>
        <div>{this.props.brandy.world}</div>
      </div>
    );
  }
};

Brandy.propTypes = {  
  brandy: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {  
  let brandy = {name: '', breed: '', weight: '', temperament: '', 
    hobby_ids: []};
  const brandyId = ownProps.match.params.id;
  if (state.brandies.length > 0) {
    brandy = Object.assign({}, state.brandies.find(brandy => brandy._id == brandyId))
  }
  return {brandy: brandy};
};

export default connect(mapStateToProps)(Brandy);
