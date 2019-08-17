import { combineReducers } from 'redux';
import { todoReducer } from './TodoReducer';

const rootReducers = combineReducers({
  todos: todoReducer
});

export default rootReducers;
