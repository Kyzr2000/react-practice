import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  state = {
    mouse: false,
  };
  handle = (status) => {
    return () => {
      this.setState({ mouse: status });
    };
  };
  change = (id) => {
    return (event) => {
      this.props.update(id, event.target.checked);
    };
  };
  deleteBtn = (id) => {
    return () => {
      if (window.confirm("确定删除这条吗？")) {
        this.props.deleteTodo(id);
      }
    };
  };
  render() {
    const { todo } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handle(true)}
        onMouseLeave={this.handle(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={this.change(todo.id)}
          />
          <span>{todo.name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={this.deleteBtn(todo.id)}
        >
          删除
        </button>
      </li>
    );
  }
}
