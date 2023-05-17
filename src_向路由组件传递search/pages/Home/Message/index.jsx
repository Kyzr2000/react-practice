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
  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map((obj) => {
            return (
              <li key={obj.id}>
                <NavLink
                  to={`/home/message/detail/?id=${obj.id}&title=${obj.title}`}
                >
                  {obj.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <hr />
        <Route path="/home/message/detail" component={Detail} />
      </div>
    );
  }
}
