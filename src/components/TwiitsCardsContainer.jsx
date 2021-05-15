import React, { Component } from "react";
import "../styles/Contant.css";
import TwitteCard from "./TwiitCard";

import shareicon from "./../icons/share.png";
import downloadicon from "./../icons/download.png";

class TweetcardsCard extends Component {
  state = {
    channel: "twitter Clone",
    ImgArray: [shareicon, downloadicon],
  };
  renderCards(data) {
    return data.map((element, index) => {
      console.log("elemnt created" + element.title);
      return (
        <TwitteCard
          element={{
            Imgs: this.state.ImgArray,
            title: element.title,
            dis: element.dis,
            id: element.id,
          }}
        />
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
