import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';
import StateLoader from './stateLoader';

const stateLoader = new StateLoader();
// Las reduxdevtools solo van a ser usadas en develop
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = createLogger();

const middlewareArray = process.env.NODE_ENV === 'development' ? [thunk, loggerMiddleware] : [thunk];

const store = createStore(reducers, stateLoader.loadState(), composeEnhancers(applyMiddleware(...middlewareArray)));

store.subscribe(() => {
  stateLoader.saveState(store.getState());
});

export {
  store,
};
