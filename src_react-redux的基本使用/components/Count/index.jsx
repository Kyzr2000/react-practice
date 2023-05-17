import React, { Component } from "react";

export default class Count extends Component {
  increment = () => {
    const { value } = this.num;
    this.props.jia(value * 1);
  };
  decrement = () => {
    const { value } = this.num;
    this.props.jian(value * 1);
  };
  incrementByOdd = () => {
    const { value } = this.num;
    if (this.props.count % 2 !== 0) this.props.jia(value * 1);
  };
  incrementAsync = () => {
    const { value } = this.num;
    this.props.jiaAsync(value * 1, 500);
  };

  render() {
    return (
      <div>
        <h2>当前数字为：{this.props.count}</h2>
        <select ref={(c) => (this.num = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>＋</button>&nbsp;
        <button onClick={this.decrement}>－</button>&nbsp;
        <button onClick={this.incrementByOdd}>当前数字为奇数时加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}
