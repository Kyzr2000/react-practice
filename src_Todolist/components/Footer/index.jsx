import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  changeAllBtn = (event) => {
    this.props.checkAll(event.target.checked);
  };
  render() {
    const { todos } = this.props;
    const total = todos.length;
    const num = todos.reduce((acc, todo) => {
      if (todo.done) return acc + 1;
      else return acc;
    }, 0);
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={num == total && total != 0 ? true : false}
            onChange={this.changeAllBtn}
          />
        </label>
        <span>
          <span>已完成{num}</span> / 全部{total}
        </span>
        <button
          className="btn btn-danger"
          onClick={this.props.deleteAllChecked}
        >
          清除已完成任务
        </button>
      </div>
    );
  }
}
