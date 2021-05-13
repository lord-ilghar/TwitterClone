import React, { Component } from "react";
import "./../styles/side.css";

class SideCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderlist(list) {
    console.log("fff" + list);
    console.log(list);
    return list.map((item, index) => {
      console.log("ffff" + item);
      return (
        <a className="sidecard" key={index || item.id} href={item.link || "#"}>
          <div>
            <h4>{item.title || "untitled"}</h4>
            <p>{item.dis}</p>
          </div>
        </a>
      );
    });
  }
  render() {
    return <>{this.renderlist(this.props.cardinfo)}</>;
  }
}

export default SideCard;
