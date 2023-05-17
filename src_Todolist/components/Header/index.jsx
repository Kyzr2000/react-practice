import React, { Component } from "react";
import "./index.css";
import { nanoid } from "nanoid";
export default class index extends Component {
  addTodo = (event) => {
    const { target, keyCode } = event;
    // console.log(target.value, keyCode);
    if (keyCode !== 13) return;
    if (target.value.trim(" ") == "") {
      alert("输入的值不能为空！");
      return;
    }
    const obj = { id: nanoid(), name: target.value, done: false };
    this.props.add(obj);
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyUp={this.addTodo}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
