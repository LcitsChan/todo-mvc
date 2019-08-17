import * as React from 'react';
import { Todo, TodosState } from '../model';
import TodoItem from './TodoItem';

export interface TodoListProps {
  todos: TodosState;
  deleteTodo: (todo: Todo) => void;
  completedTodo: (todo: Todo) => void;
}

export interface TodoListState {}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  render() {
    const { deleteTodo, completedTodo, todos } = this.props;
    return (
      <ul>
        {todos.map((todo, idx) => (
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodo}
            completedTodo={completedTodo}
            key={idx}
          />
        ))}
      </ul>
    );
  }
}

// {
//   todos.map((todo) =>
//     (<TodoItem todo={todo} />))
// }

export default TodoList;
