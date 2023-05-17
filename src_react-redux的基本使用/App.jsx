import React, { Component } from "react";
import store from "./redux/store";
// import { Button } from "antd";
// import { WechatOutlined, SearchOutlined } from "@ant-design/icons";
// import "antd/dist/reset.css";
// import { Switch, Route, Redirect } from "react-router-dom";
// import "./App.css";
import Count from "./containers/Count";

export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store} />
      </div>
    );
  }
}
