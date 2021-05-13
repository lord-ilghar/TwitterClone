import React, { Component } from "react";
import "./../styles/Searchbar.css";
import Searchicon from "./../icons/Search.png";
import "./../styles/navbar.css";

class Searchbar extends Component {
  state = {};
  render() {
    return (
      <div className="searchinput">
        <img className="icon" src={Searchicon} alt="Search icon" />
        <input type="text" name="Search" id="Search" />
      </div>
    );
  }
}

export default Searchbar;
