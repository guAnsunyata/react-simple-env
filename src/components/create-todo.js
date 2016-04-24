import React, { Component } from 'react';

export default class CreateTodo extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      error: null
    }
  }

  renderError() {
    if (!this.state.error) { return null }
    return <div style={{ color: 'red' }}>{this.state.error}</div>
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Shat do I need to do" ref="createInput"/>
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const invalidateInput = this.validateInput(task);

    if (invalidateInput) {
      this.setState({ error: invalidateInput});
      this.refs.createInput.value = '';
      return
    }

    this.setState({ error: null });
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }

  validateInput(task) {
    if (!task){
      return 'Please enter a task.'
    }else if (_.find(this.props.todos, todo => todo.task === task)) {
      return 'Task aleady exist.'
    }else{
      return null
    }
  }

}
