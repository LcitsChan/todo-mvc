import * as React from 'react';
import { Todo, TodosState } from '../model';
import TodoItem from './TodoItem';
import * as VisivilityTypes from '../redux/constants/VisibilityType';

export interface TodoListProps {
  type: string;
  todos: TodosState;
  deleteTodo: (todo: Todo) => void;
  completedTodo: (todo: Todo) => void;
}

export interface TodoListState {}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  render() {
    const { type, deleteTodo, completedTodo, todos } = this.props;
    let renderTodos = todos;
    switch (type) {
      case VisivilityTypes.SHOW_ACTIVE:
        renderTodos = todos.filter(todo => !todo.completed);
        break;
      case VisivilityTypes.SHOW_COMPLETED:
        renderTodos = todos.filter(todo => todo.completed);
        break;
    }
    return (
      <ul>
        {renderTodos.map(todo => (
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodo}
            completedTodo={completedTodo}
            key={todo.id}
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
