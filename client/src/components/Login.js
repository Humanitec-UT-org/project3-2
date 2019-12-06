import React from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

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
      <div className="login">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Welcome</h3>
                      <Form onSubmit={this.submitHandler}>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={e => this.changeHandler(e)}
                            required
                            autoFocus
                          />
                          <label htmlFor="inputEmail">Username</label>
                        </div>

                        <div className="form-label-group">
                          <input
                            type="password"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={e => this.changeHandler(e)}
                            required
                          />
                          <label htmlFor="inputPassword">Password</label>
                        </div>

                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                        </div>

                        <button
                          className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                          type="submit"
                        >
                          Login
                        </button>

                        <div className="text-center"></div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
