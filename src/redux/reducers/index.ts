import { combineReducers } from 'redux';
import { todoReducer } from './TodoReducer';
import { visibilityReducer } from './VisibilityReducer';

const rootReducers = combineReducers({
  todos: todoReducer,
  visibility: visibilityReducer
});

export default rootReducers;
