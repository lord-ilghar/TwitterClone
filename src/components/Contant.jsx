import React, { Component } from "react";
import "./../styles/Contant.css";
import NewTweet from "./NewTweet";
import TweetcardsCard from "./TwiitsCardsContainer";

class Contant extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="contant__main">
        <NewTweet />
        <TweetcardsCard
          twiiteCards={[
            { title: "hello , you", dis: "helloooooo" },
            { title: "bye you", dis: "helloooooo" },
            { title: "bye you", dis: "helloooooo" },
          ]}
        />
      </main>
    );
  }
}

export default Contant;
