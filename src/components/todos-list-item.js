import React, { Component } from 'react';

export default class TodosListItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
      </td>
    );
  }

  renderTaskSection() {
  const { task, isCompleted } = this.props; //從this.props extra出task, isCompleted
  
  //Styling
  const taskStyle = {
    color: isCompleted? 'green' : 'red',
    cursor: 'pointer'
  };

  if (this.state.isEditing) {
    return (
      <td>
        <form onSubmit={this.onSaveClick.bind(this)}>
          <input type="text" defaultValue={task} ref="editInput"/>
        </form>
      </td>
    );
  }

    return (
      <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}
      >
        {task} 
      </td> //this.props.task
    )
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </tr>
    );
  } //renderActionSection不用bind(this)

  onEditClick() {
    this.setState({ isEditing: true});
  }

  onCancelClick() {
    this.setState({ isEditing: false})
  }

  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false});
    console.log(this.props);
  }

  onDeleteClick(){
    this.props.deleteTask(this.props.task);
  }

}
