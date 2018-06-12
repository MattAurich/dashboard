import 'babel-polyfill';  
import React from 'react';  
import { render } from 'react-dom';  
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';  
import { HashRouter } from 'react-router-dom';
import AllRoutes from './routes';
import App from './components/App';
import {loadBrandies} from './actions/brandyActions';

const store = configureStore();

store.dispatch(loadBrandies());

render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <AllRoutes />
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('app'),
);
