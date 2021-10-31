import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 

import {createStore, applyMiddleware, compose} from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import memeReducer from './reducers/memeReducer';

import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(memeReducer, 
  composeEnhancers(applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);