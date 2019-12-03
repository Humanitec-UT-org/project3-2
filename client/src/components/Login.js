import React from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import "../";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    errorMessage: null
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post("/api/auth/login", this.state)
      .then(response => {
        console.log("response is done: ", response);
        this.props.updateUser(response.data);
      })
      .catch(error => {
        // error.response;
        console.log("something is wrong with Login", error.response.data);
        this.setState({
          errorMessage: error.response.data.message
        });
      });
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="Login-Wrapper">
        <div id="formContent">
          <div className="fadeIn first">
            <img src="..." alt="..." id="icon" />
          </div>
          LOGIN:
          <Form onSubmit={this.submitHandler}>
            <input
              id="login"
              className="fadeIn second"
              name="username"
              onChange={e => this.changeHandler(e)}
              value={this.state.username}
              type="text"
              placeholder="name"
            ></input>
            <br></br>
            <input
              id="password"
              className="fadeIn third"
              name="password"
              onChange={e => this.changeHandler(e)}
              value={this.state.password}
              type="password"
              placeholder="password"
            ></input>
            <button type="submit">Submit</button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
