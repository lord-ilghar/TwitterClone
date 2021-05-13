import React, { Component } from "react";
import "./../styles/NewTweet.css";

class ImgArray extends Component {
  listRender(list) {
    return list.map((element, index) => {
      return <img className="listimg" src={element} alt="icon" key={index} />;
    });
  }
  render() {
    return this.listRender(this.props.list);
  }
}

export default ImgArray;
