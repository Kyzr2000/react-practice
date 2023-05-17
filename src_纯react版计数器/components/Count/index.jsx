import React, { Component } from "react";

export default class Count extends Component {
  state = { count: 0 };
  increment = () => {
    const { value } = this.num;
    const { count } = this.state;
    this.setState({ count: count + Number(value) });
  };
  decrement = () => {
    const { value } = this.num;
    const { count } = this.state;
    this.setState({ count: count - Number(value) });
  };
  incrementByOdd = () => {
    const { value } = this.num;
    const { count } = this.state;
    if (count % 2 !== 0) this.setState({ count: count + Number(value) });
  };
  incrementAsync = () => {
    const { value } = this.num;
    const { count } = this.state;
    setTimeout(() => {
      this.setState({ count: count + Number(value) });
    }, 1000);
  };

  render() {
    return (
      <div>
        <h2>当前数字为：{this.state.count}</h2>
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
