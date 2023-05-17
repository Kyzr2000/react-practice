import React, { Component } from "react";
import { Button } from "antd";
import { WechatOutlined, SearchOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
// import { Switch, Route, Redirect } from "react-router-dom";
// import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <Button type="primary">你好</Button>
        <WechatOutlined />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
      </div>
    );
  }
}
