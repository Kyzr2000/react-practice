import React, { Component } from "react";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/action/count";

//引入connect用于链接UI组件与redux
import { connect } from "react-redux";

class Count extends Component {
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
        <h2>我是Count组件，下面组件的人数为{this.props.renshu}</h2>
        <h4>当前数字为：{this.props.count}</h4>
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

//创建并暴露一个Count的容器组件
export default connect(
  (state) => ({ count: state.he, renshu: state.rens.length }),
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count);
