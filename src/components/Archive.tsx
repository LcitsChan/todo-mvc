import React from 'react';

export interface ArchiveProps {
  clearCompleted: () => void;
}

export interface ArchiveState {}

class Archive extends React.Component<ArchiveProps, ArchiveState> {
  render() {
    return (
      <div>
        <button>all</button>
        <button>active</button>
        <button>completed</button>
        <button onClick={this.props.clearCompleted}>clear completed</button>
      </div>
    );
  }
}

export default Archive;
