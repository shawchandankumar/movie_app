import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import Movies from './reducers';

const store = createStore(Movies);
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
