import React from "react";

export interface AddTodoProps {
  addTodo: (test: string) => void
}

export interface AddTodoState {
}

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {

  handleSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
    const text = e.currentTarget.value.trim();
    if (e.which === 13 && text.length !== 0) {
      this.props.addTodo(text)
      e.currentTarget.value = ''
    }
  }

  render() {
    return (
      <input 
        className="new-todo"
        type="text"
        placeholder="Enter your todo thing"
        autoFocus={true}
        onKeyDown={ this.handleSubmit.bind(this) }
      />)
  }
}

export default AddTodo;