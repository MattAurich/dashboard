import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import * as pageActions from '../../actions/pageActions';
import PageList from './PageList';

class Pages extends React.Component {  
  render() {
    const pages = this.props.pages;
    return (
      <div className="col-md-12">
        <h1>Pages</h1>
        <div className="col-md-4">
          <PageList pages={pages} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
}


Pages.propTypes = {
  pages: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    pages: state.pages
  };
} 

export default connect(mapStateToProps)(Pages);
