import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Header extends Component {
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
    return (
      <div>
        <h2>React Router Demo</h2>&nbsp;
        <button onClick={this.go}>后退两步</button>
        &nbsp;
        <button onClick={this.forward}>前进</button>
        &nbsp;
        <button onClick={this.back}>后退</button>
        &nbsp;
      </div>
    );
  }
}
export default withRouter(Header);
