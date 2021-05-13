import Getin from "./LoginOrSignup";
import React, { Component } from "react";
import LoginWindowPup from "./LoginandSignupWindowPup";
// import './App.css';

class Mainlogin extends Component {
  constructor(props) {
    super(props);
    this.state = { login: undefined };
    this.SharingValue = this.SharingValue.bind(this);
  }
  SharingValue(DOM) {
    this.setState({ login: DOM.login });
    !DOM.doFilter
      ? this.setState({ brighness: "90%", Blur: "2px" })
      : this.setState({ brighness: "100%", Blur: "0px" });
    console.log("obj is : " + DOM.doFilter);
  }

  loginOrSignUp() {
    if (this.state.login === true) {
      return (
        <LoginWindowPup
          share={this.SharingValue}
          title="hello word 22"
          type="login"
        ></LoginWindowPup>
      );
    } else if (this.state.login === false) {
      return (
        <LoginWindowPup
          share={this.SharingValue}
          title="hello word1"
          type="signup"
        ></LoginWindowPup>
      );
    }
  }

  render() {
    // console.log(this.state);
    return (
      <>
        <Getin
          share={this.SharingValue}
          styles={{
            filter: `brightness(${this.state.brighness}) blur(${this.state.Blur})`,
          }}
        />
        {this.loginOrSignUp()}
      </>
    );
  }
}
export default Mainlogin;
