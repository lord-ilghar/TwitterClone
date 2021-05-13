import React, { Component } from "react";
import "./../styles/Contant.css";
import NewTweet from "./NewTweet";
import TweetcardsCard from "./MainCard";

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
          twiiteCards={[{ dis: "helloooooo" }, { dis: "helloooooo" }]}
        />
      </main>
    );
  }
}

export default Contant;
