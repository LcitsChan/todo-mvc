import * as TodoTypes from '../constants/ActionTypes';
import { Todo, TodosState } from '../../model';
import { createAction } from 'redux-actions';


export const addTodo = createAction<Todo, string>(
  TodoTypes.ADD_TODO,
  (text: string) => ({ text, completed: false })
)

export const deleteTodo = createAction<Todo, Todo>(
  TodoTypes.DELETE_TODO,
  (todo: Todo) => todo
)

export const completeTodo = createAction<Todo, Todo>(
  TodoTypes.COMPLETE_TODO,
  (todo: Todo) => todo
)

export const setTodos = createAction<TodosState, TodosState>(
  TodoTypes.SET_TODO,
  (todos: TodosState) => todos
)

