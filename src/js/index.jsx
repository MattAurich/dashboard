import 'babel-polyfill';  
import React from 'react';  
import { render } from 'react-dom';  
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';  
import { HashRouter } from 'react-router-dom';
import AllRoutes from './routes';
import App from './components/App';
import { loadPages } from './actions/pageActions';
import { loadSections } from './actions/sectionActions';

const store = configureStore();

store.dispatch(loadPages());
store.dispatch(loadSections());

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
