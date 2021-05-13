import React, { Component } from "react";
import navbaricon from "./../img/f.jpg";
import "./../styles/navbar.css";
class NavBar extends Component {
  renderlist(arr) {
    return arr.map((value, index) => {
      return (
        <a
          key={value.id || index}
          href={typeof value.link === "string" ? value.link : "#"}
          className="navitem"
        >
          <div className="iconandtitlecontainer">
            <div className="icon">
              <img src={value.icon} alt="icon" />
            </div>

            <div className="navTitles">{value.title}</div>
          </div>
        </a>
      );
    });
  }
  render() {
    // console.log(this.props);
    return (
      <nav className="navitemsContainer">
        <div className="lis">{this.renderlist(this.props.items)}</div>
        <button>Tweet</button>
      </nav>
    );
  }
}

export default NavBar;
