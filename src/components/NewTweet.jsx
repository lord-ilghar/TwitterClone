import React, { Component } from "react";
import ImageArray from "./ImagArray";

import "./../styles/NewTweet.css";

import globeicon from "../icons/globe.png";
import cubeicon from "../icons/cube.png";
import shoppingicon from "../icons/shopping.png";
import Userimg from "./../icons/user.png";
import starticon from "../icons/star.png";

class NewTweet extends Component {
  state = {
    icons: [globeicon, shoppingicon, cubeicon],
  };
  render() {
    return (
      <header className="NewTweet">
        <div className="NewTweet__title">
          <h2>Home</h2>
          <div>
            <img src={starticon} alt="" srcset="" />
          </div>
        </div>
        <div className="NewTweet__img-dis">
          <div>
            <img src={Userimg} alt="" />
          </div>
          <input type="text" placeholder="What`s Happening" />
        </div>
        <div className="NewTweet__footer">
          <div>
            <ImageArray list={this.state.icons} />
          </div>
          <button>Tweet</button>
        </div>
      </header>
    );
  }
}

export default NewTweet;
