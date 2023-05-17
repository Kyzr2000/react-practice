import React, { Component } from "react";
import axios from "axios";
export default class Search extends Component {
  search = () => {
    const { value: key } = this.keyElement;
    console.log(key);
    this.props.updateState({ isFirst: false, isLoading: true });
    axios.get(`https://api.github.com/search/users233?q=${key}`).then(
      (res) =>
        this.props.updateState({
          isLoading: false,
          users: res.data.items,
        }),
      (err) => this.props.updateState({ isLoading: false, error: err.message })
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户列表</h3>
        <div>
          <input
            ref={(c) => {
              this.keyElement = c;
            }}
            type="text"
            placeholder="输入您的姓名进行搜索"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
