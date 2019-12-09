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
    errors: []
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post("/api/auth/signup", this.state)
      .then(response => {
        this.props.updateUser(response.data);
        console.log(response.data);
        // this.props.history.push("/profile");
      })
      .catch(err => console.log("i want to grab this error", err));
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
                          onClick={() => {
                            console.log(
                              "I submit signup",
                              this.props.updateUser()
                            );
                            if (!this.props.updateUser) {
                              store.addNotification({
                                title: "Food Added",
                                message: "Item was added successfully",
                                type: "default", // 'default', 'success', 'info', 'warning'
                                container: "bottom-left", // where to position the notifications
                                animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
                                animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
                                dismiss: {
                                  duration: 3000
                                }
                              });
                            } else {
                              return null;
                            }
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
