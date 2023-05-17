import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    // const { to, children } = this.props;
    return (
      <NavLink
        activeClassName="kyzr_active"
        className="list-group-item"
        {...this.props}
      />
    );
  }
}
