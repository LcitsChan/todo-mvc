import * as React from 'react';
import { Todo } from '../model';

export interface TodoItemProps {
  todo: Todo;
  deleteTodo: (todo: Todo) => void;
  completedTodo: (todo: Todo) => void;
}

export interface TodoItemState {}

class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
  handleDelete(todo: Todo) {
    this.props.deleteTodo(todo);
  }

  handleComplete(todo: Todo) {
    this.props.completedTodo(todo);
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <div>
          <label
            onClick={this.props.completedTodo.bind(this, todo)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </label>
          <button onClick={this.handleDelete.bind(this, todo)}>删除</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
