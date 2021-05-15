import React, { Component } from "react";
import "./../styles/LoginWindow.css";
import Xicon from "./../icons/xbutton.png";
import Forms from "./LoginForms";

class LoginWindowPup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doFilter: true,
    };
    this.XButton = this.XButton.bind(this);
  }
  componentWillUnmount() {
    console.log(this.props);
    this.props.share({ doFilter: true });
  }
  XButton() {
    console.log(this.props);
    this.props.share({ login: undefined });
  }

  render() {
    return (
      <div className="window">
        <div className="top">
          <h1>{this.props.title}</h1>
          <div>
            <img onClick={this.XButton} src={Xicon} alt="X button" />
          </div>
        </div>
        <Forms type={this.props.type}></Forms>
      </div>
    );
  }
}

export default LoginWindowPup;
