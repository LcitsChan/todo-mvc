import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import {
  addTodo,
  deleteTodo,
  completeTodo,
  completeAllTodos,
  clearCompleted
} from './redux/actions';
import TodoList from './components/TodoList';
import { TodosState, TodoAppState } from './model';
import Archive from './components/Archive';

export interface AppProps {
  todos: TodosState;
  dispatch: Dispatch<AnyAction>;
}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    const { todos, dispatch } = this.props;
    return (
      <div className="App">
        <h1>Todo MVC</h1>
        <AddTodo
          isEmpty={todos.length === 0}
          addTodo={text => dispatch(addTodo(text))}
          completeAll={() => dispatch(completeAllTodos())}
        />
        <TodoList
          todos={todos}
          deleteTodo={todo => dispatch(deleteTodo(todo))}
          completedTodo={todo => dispatch(completeTodo(todo))}
        />
        <Archive clearCompleted={() => dispatch(clearCompleted())} />
      </div>
    );
  }
}

const mapStateToProps = (state: TodoAppState) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
