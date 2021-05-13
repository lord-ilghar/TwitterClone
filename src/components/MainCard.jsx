import React, { Component } from "react";
import "../styles/Contant.css";
import ImgArray from "./ImagArray";

import likeicon from "./../icons/likeraw.png";
import shareicon from "./../icons/share.png";
import downloadicon from "./../icons/download.png";

class TweetcardsCard extends Component {
  state = {
    channel: "twitter Clone",
    ImgArray: [likeicon, shareicon, downloadicon],
  };
  renderCards(data) {
    return data.map((element, index) => {
      return (
        <div className="twiitCards" key={element.id || index}>
          <div className="title">
            <h4>{this.state.channel}</h4>
          </div>
          <div className="Contant">
            <p>{element.dis}</p>
          </div>
          <div className="twiitsFooter">
            <ImgArray list={this.state.ImgArray}> </ImgArray>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <div className="MainCardcontainer">
          {this.renderCards(this.props.twiiteCards)}
        </div>
      </>
    );
  }
}

export default TweetcardsCard;
