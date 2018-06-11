import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';

function auth(state = [], action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        value: action.value,
        status: 'logged in',
      };
    case 'LOGOUT':
      return {
        value: 'guest',
        status: 'logged out',
      };
    default:
      return state;
  }
}

const initialState = {
  value: 'guest',
  status: 'logged out',
};
const store = createStore(auth, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
