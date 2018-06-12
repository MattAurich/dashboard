import React from 'react';  
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Page extends React.Component {  
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.page.id}</h1>
        <div>{this.props.page.content}</div>
      </div>
    );
  }
};

Page.propTypes = {  
  page: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {  
  let page = {name: '', breed: '', weight: '', temperament: '', 
    hobby_ids: []};
  const pageId = ownProps.match.params.id;
  if (state.pages.length > 0) {
    page = Object.assign({}, state.pages.find(page => page._id == pageId))
  }
  return {page: page};
};

export default connect(mapStateToProps)(Page);
