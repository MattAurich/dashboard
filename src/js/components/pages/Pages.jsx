import React from 'react';
import { Route } from 'react-router-dom';
import Page from './Page';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageList from './PageList';


const Pages = (props) => {
  const { pages } = props;

  return (
    <div className="col-md-12">
      <h1>Pages</h1>
      <div className="col-md-4">
        <PageList pages={pages} />
      </div>
      <div className="col-md-8">
        <Route path="/pages/:id" component={Page} />
      </div>
    </div>
  );
}


Pages.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    pages: state.pages
  };
} 

export default connect(mapStateToProps)(Pages);
