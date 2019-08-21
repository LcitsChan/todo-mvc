import React from 'react';

export interface ArchiveProps {
  clearCompleted: () => void;
  showAll: () => void;
  showActive: () => void;
  showCompleted: () => void;
}

export interface ArchiveState {}

class Archive extends React.Component<ArchiveProps, ArchiveState> {
  render() {
    return (
      <div>
        <button onClick={this.props.showAll}>all</button>
        <button onClick={this.props.showActive}>active</button>
        <button onClick={this.props.showCompleted}>completed</button>
        <button onClick={this.props.clearCompleted}>clear completed</button>
      </div>
    );
  }
}

export default Archive;
