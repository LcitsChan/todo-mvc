import { AnyAction } from "redux";
import * as TodoTypes from '../constants/ActionTypes'
import { Todo } from '../../model'
import { createAction } from 'redux-actions' 

// To be compared
interface AddTodoAction extends AnyAction {
  type: typeof TodoTypes.ADD_TODO,
  todo: Todo
}

export const _addTodo = (text: string) => {
  return ({
    type: typeof TodoTypes.ADD_TODO,
    todo: { text, compared: false } 
  })
}

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

