import React, { Component } from "react";
import "./index.css";
export default class List extends Component {
  render() {
    const { users, isLoading, isFirst, error } = this.props;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎您首次来到本页面！</h2>
        ) : isLoading ? (
          <h2>Loading………</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          users.map((user) => {
            return (
              <div key={user.id} className="card">
                <a href={user.html_url} target="_blank">
                  <img src={user.avatar_url} style={{ width: "100px" }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
