import React, { Component } from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    task: 'play ball',
    isCompleted: false
  }
];

//es5 Class (包含constructor等語法糖衣、extend...)
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos // es5 = todos:todos
    };
  }

  render() {
    return (
      <div>
        <h1>React Todo APP</h1>
        <CreateTodo
          todos = {this.state.todos}
          createTask={this.createTask.bind(this)} //bind 為了this.state的正確
        />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task); //find the task
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos }); //update
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
}
