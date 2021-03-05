import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { Router } from 'react-router-dom';
import history from './history/history'
import StateReducer from './redux/reducers';
import thunk from 'redux-thunk';
import createMiddlewareSaga from 'redux-saga';
import rootSaga from './redux/saga/rootSaga'

const sagaMiddleware = createMiddlewareSaga();

const configureStore = () => {
  let myStore = createStore(StateReducer, applyMiddleware(thunk, sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return myStore;
}
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode >,
  document.querySelector('#root'));

