import React, { Component } from "react";
import Searchbar from "./Searchbar";
import "./../styles/side.css";
import CardContainer from "./SideCardsConatiner";

const cards = [
  { link: "/home", title: "hello word", dis: "this is hello word", id: 1 },
  { link: "/a", title: "hello word", dis: "this is hello word", id: 1 },
  { link: "/haaaome", title: "hello word", dis: "this is hello word", id: 1 },
  { link: "/homeaaaa", title: "hello word", dis: "this is hello word", id: 1 },
];
const cards22 = [
  { link: "/home", title: "", dis: "", id: 1 },
  { link: "/fsfsfshome", title: "bye word", dis: "this is bye word", id: 1 },
  { link: "/homefsfs", title: "bye word", dis: "this is bye word", id: 1 },
  { link: "/homefsfs", title: "bye word", dis: "this is bye word", id: 1 },
];
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside className="navitemsContainer sidebar">
        <Searchbar />
        <CardContainer title="hello" cards={cards} />
        <CardContainer title="good bye" cards={cards22} />
      </aside>
    );
  }
}

export default Sidebar;
