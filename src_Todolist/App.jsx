import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: true },
      { id: "004", name: "上课", done: false },
    ],
  };
  //在输入框添加一个任务
  add = (todo) => {
    const { todos } = this.state;
    const newTodos = [todo, ...todos];
    this.setState({ todos: newTodos });
  };
  //更新前方勾选框时更新state内的done值
  update = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id == id) return { ...todo, done };
      else return todo;
    });
    this.setState({ todos: newTodos });
  };
  //删除单个任务
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id != id;
    });
    this.setState({ todos: newTodos });
  };
  //全选或全不选
  checkAll = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done };
    });
    this.setState({ todos: newTodos });
  };
  //删除全部勾选的
  deleteAllChecked = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return !todo.done;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header add={this.add} />
          <List
            todos={this.state.todos}
            update={this.update}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={this.state.todos}
            checkAll={this.checkAll}
            deleteAllChecked={this.deleteAllChecked}
          />
        </div>
      </div>
    );
  }
}
