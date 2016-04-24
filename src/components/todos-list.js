import _ from 'lodash';
//about Lodash : http://colintoh.com/blog/lodash-10-javascript-utility-functions-stop-rewriting
import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends Component {
  renderItems(){
    const props = _.omit(this.props, 'todos'); //為了Do all in once 傳入所有props
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
  }
    /*
      Arrow Function => in es5
      function foo(todo, index){
        return <TodosListItem !@#!@/> 
      }

      Rest Parameters ... in es5 物件裡的所有東西
      task = {todo.task} iscompleted = {todo.isCompleted}

    */
  render() {
    //console.log(this.props);
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
