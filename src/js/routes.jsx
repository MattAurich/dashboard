import React from 'react';  
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';  
import Brandy from './components/brandies/Brandy';
import Brandies from './components/brandies/Brandies';

const AllRoutes = () => (
  <Switch>
    {/* <Route exact path="/" component={HomePage}/> */}
    <Route path="/brandies/:id" component={Brandy} />
    <Route path="/brandies" component={Brandies} />
    
  </Switch>
);

export default AllRoutes;
