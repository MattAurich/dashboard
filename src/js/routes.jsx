import React from 'react';  
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';  
import Page from './components/pages/Page';
import Pages from './components/pages/Pages';

const AllRoutes = () => (
  <Switch>
    {/* <Route exact path="/" component={HomePage}/> */}
    <Route path="/pages/:id" component={Page} />
    <Route path="/pages" component={Pages} />
    
  </Switch>
);

export default AllRoutes;
