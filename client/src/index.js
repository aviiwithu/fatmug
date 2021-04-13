import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import reducers from './reducers/';
import {composeWithDevTools} from 'redux-devtools-extension';

const middleware = [thunk];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)) );

ReactDOM.render(
  <Provider store={store} >
      <Router>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);