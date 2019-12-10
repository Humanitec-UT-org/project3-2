import React from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    error: null
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post("/api/auth/signup", this.state)
      .then(response => {
        this.props.updateUser(response.data);
        // user stays at signup if user already exists
        console.log(response.data);
        // this.props.history.push("/");
      })
      .catch(err => {
        if (!err.response) {
          throw err;
        }
        const { response } = err;
        if (response.status >= 400 && response.status < 500) {
          this.setState({ error: response.data.message });
        } else {
          this.setState({
            error:
              "Something went wrong on our side. we are sorry, please try again."
          });
        }
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
                        {this.state.error ? (
                          <div>{this.state.error}</div>
                        ) : null}

                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.changeHandler}
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
                            onChange={this.changeHandler}
                            pattern=".{8,}"
                            required
                            title="8 characters minimum"
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
                          style={{
                            backgroundColor: "#48A3B8",
                            borderColor: "#48A3B8"
                          }}
                        >
                          Signup
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

export default Signup;
