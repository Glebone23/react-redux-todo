import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promiseMiddleware from 'redux-promise-middleware';
import {
  todos, initialTodosState,
} from 'reducers';
import thunkMiddleware from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware()));

export const initialStoreState = Map({
  todos: initialTodosState,
});

const store = createStore(
  combineReducers({
    todos,
  }),
  initialStoreState,
  enhancer,
);

export default store;
