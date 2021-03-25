import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import reducers from './reducers/'

const store = createStore(reducers,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store} >
      <Router>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);