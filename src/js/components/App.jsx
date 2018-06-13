import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

const App = ({ children }) => (
  <div className="container-fluid">
    <Header />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
