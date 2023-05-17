import React, { Component } from "react";
import qs from "query-string";
const details = [
  {
    id: "001",
    content: "你好，我的祖国",
  },
  {
    id: "002",
    content: "你好，我的家乡",
  },
  {
    id: "003",
    content: "你好，我的世界",
  },
];
export default class Detail extends Component {
  render() {
    // console.log(this.props.location);
    const { id, title } = this.props.match.params;
    console.log(this.props);
    const obj = details.find((detail) => {
      return detail.id == id;
    });
    return (
      <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{obj.content}</li>
      </ul>
    );
  }
}
