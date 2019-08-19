import React from 'react';

export interface AddTodoProps {
  addTodo: (test: string) => void;
  completeAll: () => void;
}

export interface AddTodoState {}

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
  handleSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
    const text = e.currentTarget.value.trim();
    if (e.which === 13 && text.length !== 0) {
      this.props.addTodo(text);
      e.currentTarget.value = '';
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.props.completeAll}>all</button>
        <input
          className="new-todo"
          type="text"
          placeholder="Enter your todo thing"
          autoFocus={true}
          onKeyDown={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default AddTodo;
