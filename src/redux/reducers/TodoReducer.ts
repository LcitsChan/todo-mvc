import { Todo, TodosState } from '../../model'
import * as TodoTypes from '../constants/ActionTypes'
import { handleActions, Action } from "redux-actions";

const initialState: TodosState = []

export const todoReducer = handleActions<TodosState, Todo>({
  [TodoTypes.ADD_TODO]: (state: TodosState, action: Action<Todo>): TodosState => {
    return [
      {
        id: state.reduce((maxId, todo) => Math.max(todo.id!, maxId), -1) + 1,
        text: action.payload.text,
        completed: false
      },
      ...state]
  },

  [TodoTypes.DELETE_TODO]: (state: TodosState, action: Action<Todo>): TodosState => {
     return state.filter(
      todo => todo.id !== action.payload.id
    );
  },

  [TodoTypes.COMPLETE_TODO]: (state: TodosState, action: Action<Todo>): TodosState => {
    return state.map(
      (todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed
        }
        return todo
      }
    );
 }
}, initialState)