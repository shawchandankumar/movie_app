import React, { createContext } from 'react';
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

export default function Connect (callback) {
  return function (Component) {

    class ConnectedComponent extends React.Component {

      constructor (props) {
        super(props);
        // this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
      }

      componentDidMount () {
        const { store }= this.props;
        store.subscribe(() => this.forceUpdate());
        console.log('Not updating');
      }

      componentWillUnmount () {
        this.unsubscribe();
      }

      render () {
        const { store } = this.props;
        const state = store.getState();
        const dataToBePassedAsProps = callback(state);
        return (
          <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
        );
      }
    }

    return class ComponentWrapper extends React.Component {
      render () {
        return <StoreContext.Consumer>
          {(store) => <ConnectedComponent store={store} />}
        </StoreContext.Consumer>
      }
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
