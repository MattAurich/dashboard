import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PageList from './PageList';
import Page from './Page';
import CreatePage from './CreatePage';


const Pages = (props) => {
  const { pages } = props;

  return (
    <div className="col-md-12">
      <h1>Pages
        <Link to="/pages/create" className="btn btn-primary">
          + page
        </Link>
      </h1>
      <div className="col-md-4">
        <PageList pages={pages} />
      </div>
      <div className="col-md-7 col-md-offset-1">
        <Switch>
          <Route exact path="/pages/create" component={CreatePage} />
          <Route path="/pages/:id" component={Page} />
        </Switch>
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
