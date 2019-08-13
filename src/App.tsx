import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { addTodo, deleteTodo, completeTodo } from './redux/actions'
import TodoList from './components/TodoList';
import { TodosState, TodoAppState } from './model';

export interface AppProps {
  todos: TodosState;
  dispatch: Dispatch<AnyAction>;
}

export interface AppState {

}

class App extends React.Component<AppProps, AppState> {
  render() {
    const { todos, dispatch } = this.props;
    return (
      <div className="App">
        <AddTodo
          addTodo={(text) => dispatch(addTodo(text))}
        />
        <TodoList
          todos={todos}
          deleteTodo={(todo) => dispatch(deleteTodo(todo))}
          completedTodo={(todo) => dispatch(completeTodo(todo))}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: TodoAppState) => ({
  todos: state.todos
})


export default connect(mapStateToProps)(App);
