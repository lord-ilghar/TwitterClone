import React, { Component } from "react";
import "../styles/Contant.css";
import ImgArray from "./ImagArray";
import likeicon from "./../icons/likeraw.png";
import clikedlikeicon from "./../icons/likeClicked.png";

class TwiitCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clikedlikeicon: false,
      imgSRC: likeicon,
      likesAmount: 0,
    };
    this.ClickHandler = this.ClickHandler.bind(this);
  }
  ClickHandler(e) {
    if (!this.state.clikedlikeicon !== true) {
      this.setState({
        clikedlikeicon: false,
        imgSRC: likeicon,
        likesAmount: this.state.likesAmount - 1,
      });
    } else {
      this.setState({
        clikedlikeicon: true,
        imgSRC: clikedlikeicon,
        likesAmount: this.state.likesAmount + 1,
      });
    }
  }
  render() {
    return (
      <div className="twiitCards" key={this.props.element.id}>
        <div className="title">
          <h4>{this.props.element.title}</h4>
        </div>
        <div className="Contant">
          <p>{this.props.element.dis}</p>
        </div>
        <div className="twiitsFooter">
          <div className="likeamount">
            <small>{this.state.likesAmount}</small>
            <img
              onClick={this.ClickHandler}
              className="listimg"
              src={this.state.imgSRC}
            />
          </div>
          <ImgArray list={this.props.element.Imgs} />
        </div>
      </div>
    );
  }
}

export default TwiitCard;
