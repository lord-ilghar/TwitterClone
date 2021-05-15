import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    if (this.props.type === "login") {
      return (
        <>
          <hr />
          <form action="#" method="get">
            <label htmlFor="">Email</label>
            <input type="email" name="emaillogin" id="emaillogin" />
            <label htmlFor="">Password</label>
            <input type="password" name="emaillogin" id="emaillogin" />
          </form>
        </>
      );
    } else if (this.props.type === "signup") {
      return (
        <>
          <hr />
          <form action="#" method="get">
            <h3>Personal data</h3>
            <hr />
            <label htmlFor="">User Name</label>
            <input type="text" name="uesername" id="username" />

            <label htmlFor="">Display Name</label>
            <input type="text" name="displayname" id="displayname" />

            <label htmlFor="">Age</label>
            <input type="number" name="age" id="age" />
            <h3>Digital data</h3>
            <hr />
            <label htmlFor="">E-mail address</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" />

            <label htmlFor="">Password Confirm</label>
            <input
              type="password"
              name="passwordconfirm"
              id="passwordconfirm"
            />
          </form>
        </>
      );
    }
  }
}

export default LoginForm;
