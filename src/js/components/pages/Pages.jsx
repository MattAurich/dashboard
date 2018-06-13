import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from './Page';
import PageList from './PageList';


const Pages = (props) => {
  const { pages } = props;

  return (
    <div className="col-md-12">
      <h1>Pages</h1>
      <div className="col-md-4">
        <PageList pages={pages} />
      </div>
      <div className="col-md-7 col-md-offset-1">
        <Route path="/pages/:id" component={Page} />
      </div>
    </div>
  );
};


Pages.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    pages: state.pages,
  };
}

export default connect(mapStateToProps)(Pages);
