import React, { Component } from "react";
//创建context对象
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;
export default class A extends Component {
  state = { age: 18 };
  render() {
    return (
      <div>
        <h2>A组件 ,age:{this.state.age}</h2>
        <Provider value={this.state.age}>
          <B />
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h2>B组件</h2>
        <C />
      </div>
    );
  }
}

function C() {
  return (
    <div>
      <h2>
        C组件<Consumer>{(value) => `，age：${value}`}</Consumer>
      </h2>
    </div>
  );
}
