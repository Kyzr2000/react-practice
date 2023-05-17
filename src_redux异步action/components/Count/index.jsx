import React, { Component } from "react";
//引入store，用于获取redux中保存的状态
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
export default class Count extends Component {
  increment = () => {
    const { value } = this.num;
    store.dispatch(createIncrementAction(value));
  };
  decrement = () => {
    const { value } = this.num;
    store.dispatch(createDecrementAction(value));
  };
  incrementByOdd = () => {
    const { value } = this.num;
    const count = store.getState();
    if (count % 2 !== 0) store.dispatch(createIncrementAction(value));
  };
  incrementAsync = () => {
    const { value } = this.num;
    store.dispatch(createIncrementAsyncAction(value, 500));
  };

  render() {
    return (
      <div>
        <h2>当前数字为：{store.getState()}</h2>
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
