import Mainlogin from "./components/MainLogin";
import React, { Component } from "react";
import Main from "./components/Main";

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
