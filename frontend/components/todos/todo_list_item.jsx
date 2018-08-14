import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { todo } = this.props;
    // const todo = this.props(todo) ???
    const { title, done } = todo;

    return (
      <li className="todo-list-item">
        <div>
          <h3>{ title }</h3>
        </div>
      </li>
    );

  }
}

export default TodoListItem;
