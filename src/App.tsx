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
import {
  showAll,
  showActive,
  showCompleted
} from './redux/actions/FilterActions';
import TodoList from './components/TodoList';
import { TodosState, TodoAppState } from './model';
import Archive from './components/Archive';

export interface AppProps {
  visibility: string;
  todos: TodosState;
  dispatch: Dispatch<AnyAction>;
}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    const { visibility, todos, dispatch } = this.props;
    return (
      <div className="App">
        <h1>Todo MVC</h1>
        <AddTodo
          isEmpty={todos.length === 0}
          addTodo={text => dispatch(addTodo(text))}
          completeAll={() => dispatch(completeAllTodos())}
        />
        <TodoList
          type={visibility}
          todos={todos}
          deleteTodo={todo => dispatch(deleteTodo(todo))}
          completedTodo={todo => dispatch(completeTodo(todo))}
        />
        <Archive
          showAll={() => dispatch(showAll())}
          showActive={() => dispatch(showActive())}
          showCompleted={() => dispatch(showCompleted())}
          clearCompleted={() => dispatch(clearCompleted())}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: TodoAppState) => ({
  todos: state.todos,
  visibility: state.visibility
});

export default connect(mapStateToProps)(App);
