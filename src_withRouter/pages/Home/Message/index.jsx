import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Detail from "./Detail";
export default class Message extends Component {
  state = {
    messages: [
      { id: "001", title: "消息1" },
      { id: "002", title: "消息2" },
      { id: "003", title: "消息3" },
    ],
  };
  pushBtn = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`);
  };
  replaceBtn = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`);
  };
  go = () => {
    this.props.history.go(-2);
  };
  forward = () => {
    this.props.history.goForward();
  };
  back = () => {
    this.props.history.goBack();
  };
  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map((obj) => {
            return (
              <li key={obj.id}>
                <NavLink to={`/home/message/detail/${obj.id}/${obj.title}`}>
                  {obj.title}
                </NavLink>
                &nbsp;
                <button
                  onClick={() => {
                    this.pushBtn(obj.id, obj.title);
                  }}
                >
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    this.replaceBtn(obj.id, obj.title);
                  }}
                >
                  replace查看
                </button>
              </li>
            );
          })}
          <br />
          &nbsp;
          <button onClick={this.go}>后退两步</button>
          &nbsp;
          <button onClick={this.forward}>前进</button>
          &nbsp;
          <button onClick={this.back}>后退</button>
          &nbsp;
        </ul>
        <hr />
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>
    );
  }
}
