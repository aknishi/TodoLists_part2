import React from 'react';
import { uniqueId } from '../../util/id_generator';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: "", body: "", done: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo= Object.assign({}, this.state, {id: uniqueId()})
    this.props.receiveTodo(todo);
    this.setState({title:"", body: ""});
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
  }

  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        <label> Title
          <input
            ref="title"
            value={this.state.title}
            onChange={this.update('title')}
            required/>
        </label>
        <label> Body
          <textarea
            ref="body"
            value={this.state.body}
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button>Create Todo</button>
      </form>
    )
  }
}

export default TodoForm;
