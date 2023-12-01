import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
    if(action.type === 'SET_FEELING'){
       const feeling = action.payload;
       return {...state, feeling}
    } else if (action.type === 'SET_UNDERSTANDING'){
        const understanding = action.payload;
        return {...state, understanding}
    } else if (action.type === 'SET_SUPPORT'){
        const support = action.payload;
        return {...state, support}
    } else if (action.type === 'SET_COMMENTS'){
        const comments = action.payload;
        return {...state, comments}
    }
  return state;
}

const store = createStore(
  combineReducers({
    feedback
  }),
  applyMiddleware(logger),
);

export default store;