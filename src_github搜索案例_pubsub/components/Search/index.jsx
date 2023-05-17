import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";
export default class Search extends Component {
  search = () => {
    const { value: key } = this.keyElement;
    console.log(key);
    // this.props.updateState({ isFirst: false, isLoading: true });
    PubSub.publish("changeListState", { isFirst: false, isLoading: true });
    axios.get(`https://api.github.com/search/users?q=${key}`).then(
      (res) =>
        PubSub.publish("changeListState", {
          isLoading: false,
          users: res.data.items,
        }),
      (err) =>
        PubSub.publish("changeListState", {
          isLoading: false,
          error: err.message,
        })
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
