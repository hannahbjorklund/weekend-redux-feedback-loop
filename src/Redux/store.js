import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedback = (state = '', action) => {
  return state;
}

const store = createStore(
  combineReducers({
    feedback
  }),
  applyMiddleware(logger),
);

export default store;