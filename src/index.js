import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducers from './reducers/index';
import middleWare from './middleware/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducers, middleWare);
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
