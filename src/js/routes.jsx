import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from './components/home/HomePage';
import Pages from './components/pages/Pages';

const AllRoutes = () => (
  <Switch>
    {/* <Route exact path="/" component={HomePage}/> */}
    <Route path="/pages" component={Pages} />
  </Switch>
);

export default AllRoutes;
