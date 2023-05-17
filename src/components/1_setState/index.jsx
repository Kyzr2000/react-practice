import React, { Component } from "react";

export default class index extends Component {
  state = { count: 0 };
  add = () => {
    //1.对象式的setState
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log(this.state.count);
    // });
    //2.函数式的setState
    this.setState((state, props) => {
      return { count: state.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我加一</button>
      </div>
    );
  }
}
