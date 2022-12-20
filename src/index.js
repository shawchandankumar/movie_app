import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import Root from './reducers';

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // console.log(typeof action);
  next(action);
}

// thunk is predefined in redux-thunk package
const thunk = ({ dispatch, getState }) => (next) => (action) => {
  // console.log(typeof action);
  if (typeof action === 'function') {
    action(dispatch);
    return;
  }
  next(action);
}


const store = createStore(Root, applyMiddleware(logger, thunk));
// console.log('store', store);
// console.log('State', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: MoviesData
// })

// console.log('After dispatch', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App store={store} />
);
