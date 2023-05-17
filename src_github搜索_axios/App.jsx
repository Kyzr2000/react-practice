import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";
import "./App.css";
export default class App extends Component {
  state = { users: [], isLoading: false, isFirst: true, error: "" };
  updateState = (stateObj) => {
    this.setState(stateObj);
  };
  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    );
  }
}
