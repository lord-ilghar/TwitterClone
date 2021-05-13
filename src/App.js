import Mainlogin from "./components/MainLogin";
// import NeedLoginContext from "./components/NeedLoginContext";
import React, { Component } from "react";
import Main from "./components/Main";
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { logedin: true };
  }
  render() {
    return <>{!this.state.logedin ? <Mainlogin /> : <Main />}</>;
  }
}

export default App;
