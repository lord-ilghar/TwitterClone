import React, { Component } from "react";
import Card from "./SideCard";

class SideCard extends Component {
  render() {
    return (
      <>
        <div className="cardContainer">
          <div className="title">
            <h3>{this.props.title}</h3>
          </div>
          <Card cardinfo={this.props.cards} />
        </div>
      </>
    );
  }
}

export default SideCard;
