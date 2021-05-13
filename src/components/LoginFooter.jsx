import React, { Component } from "react";

class LoginFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderlist = (list) => {
    return list.map((vlaue, index) => {
      return (
        <li key={index}>
          <a
            href={
              this.props.links.length == list.length
                ? this.props.links[index]
                : "#"
            }
          >
            {vlaue}
          </a>
        </li>
      );
    });
  };
  render() {
    return <ul className="loginFooter">{this.renderlist(this.props.name)}</ul>;
  }
}

export default LoginFooter;
