import React, { Component } from "react";
import "../styles/login.css";
import LoginFooters from "./LoginFooter";
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
    this.handelEvent = this.handelEvent.bind(this);
    // this.share = this.share.bind(this);
  }
  handelEvent(e) {
    switch (e.target.id) {
      case "login":
        this.setState({ login: true }, () => {
          this.props.share(this.state);
          console.log("login ditected");
        });
        break;
      case "signup":
        this.setState({ login: false }, () => {
          this.props.share(this.state);
          console.log("sign up ditected");
        });
        break;
    }
  }
  render() {
    return (
      <>
        <main style={this.props.styles}>
          <div className="login-container">
            <div className="leftContainer">
              <h1>Happening now</h1>
              <h3>Join Twitter today.</h3>
              <button id="signup" onClick={this.handelEvent}>
                Sign up
              </button>
              <button id="login" onClick={this.handelEvent}>
                log in
              </button>
            </div>
            <div className="img" />
          </div>
          <LoginFooters name={[1, 2, 2, 2]} links={[]} />
        </main>
      </>
    );
  }
}

export default login;
