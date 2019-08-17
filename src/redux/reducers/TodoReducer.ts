import { TodosState } from '../../model';
import * as TodoTypes from '../constants/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState: TodosState = [];

export const todoReducer = handleActions<TodosState, any>(
  {
    [TodoTypes.SET_TODO]: (state, action) => {
      if (action.payload === undefined) {
        return state;
      }
      return action.payload;
    },
    [TodoTypes.ADD_TODO]: (state, action) => {
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id!, maxId), -1) + 1,
          text: action.payload.text,
          completed: false
        },
        ...state
      ];
    },

    [TodoTypes.DELETE_TODO]: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },

    [TodoTypes.COMPLETE_TODO]: (state, action) => {
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    }
  },
  initialState
);
