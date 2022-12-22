import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import Root from './reducers';
import AppWrapper from './components/App';

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

export const StoreContext = createContext();
// console.log('store', store);
// console.log('State', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: MoviesData
// })

// console.log('After dispatch', store.getState());

class Provider extends React.Component {
  render () {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);
