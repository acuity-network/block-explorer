import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import * as middlewareModules from './middleware';
import * as reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const customMiddleware = Object.values(middlewareModules);

const combinedReducers = combineReducers(reducers);

const middleware = applyMiddleware(...customMiddleware);
const enhancers = composeEnhancers(middleware);
const store = createStore(combinedReducers, enhancers);

export default store;
