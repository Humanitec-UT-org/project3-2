import React from "react";
import axios from "axios";
//https://alligator.io/react/react-notifications-component/

import "react-notifications-component/dist/theme.css";
import "animate.css";
import { Form, Toast, ToastBody, ToastHeader } from "react-bootstrap";

class AddFoodItem extends React.Component {
  state = {
    name: "",
    emission: "",
    errors: "",
    option: "dairy"
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state)
    // send the data to the backend
    axios
      .post("/api/foods/add-to-list", this.state)
      .then(response => {
        console.log("hi", response.data.message);
        if (response.data.message) {
          this.setState({ errors: true });
          console.log("this.setState", this.setState);
        } else {
          this.setState({
            errors: false
          });
        }
        console.log(response.data, "response");
        this.setState({
          name: "",
          emission: ""
        });

        this.props.addProject();
        // const newlyCreatedProject = response.data
        // this.props.addProject(newlyCreatedProject) // { title, description, _id }
      })
      .catch(() => {});
  };

  changeNameHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  changeEmissionHandler = e => {
    const re = /^[0-9.,]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ emission: e.target.value.replace(',', '.') });
      console.log(this.state.emission)
    }
  };

  changeOptionHandler = e => {
      this.setState({ option: e.target.value });
      console.log("OPTION:" , this.state.option)
  };

  render() {
    console.log(this.state.errors);
    return (
      <div className="login">
        <div className="container-fluid">
          <div className="row no-gutter">
            {/* */}

            {/* start */}
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Welcome back</h3>
                      <Form onSubmit={this.submitHandler}>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Username"
                            name="username"
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
                          style={{
                            backgroundColor: "#48A3B8",
                            borderColor: "#48A3B8"
                          }}
                        >
                          Login
                        </button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* end */}
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Add a new Product:</h3>
                      <Form onSubmit={this.submitHandler}>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputName"
                            className="form-control"
                            placeholder="Product Name"
                            name="productname"
                            onChange={this.changeNameHandler}
                            value={this.state.name}
                            required
                            autoFocus
                          ></input>
                          <label htmlFor="inputName">Productname</label>
                        </div>
                        <div className="form-label-group">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Emission"
                            onChange={this.changeEmissionHandler}
                            value={this.state.emission}
                            pattern="[0-9]+([\.,][0-9]?"
                            required
                          ></input>
                          <label htmlFor="inputEmission">Emission</label>
                        </div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label
                              className="input-group-text"
                              htmlFor="inputGroupSelect01"
                            >
                              Options
                            </label>
                          </div>
                          <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            defaultValue={"DEFAULT"}
                            value={this.state.option}
                            onChange={this.changeOptionHandler} 
                          >
                            <option value="DEFAULT" disabled>
                              Choose...
                            </option>

                            <option value="dairy">dairy</option>
                            <option value="fat">fat</option>
                            <option value="fish">fish</option>
                            <option value="fruits">fruits</option>
                            <option value="grain">grain</option>
                            <option value="meat">meat</option>
                            <option value="seed">seed</option>
                            <option value="spices">spices</option>
                            <option value="vegetable">vegetable</option>
                          </select>
                        </div>
                        {/* background-color: #48A3B8;
    border-color: #48A3B8; */}

                        <button
                          className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                          style={{
                            backgroundColor: "#48A3B8",
                            borderColor: "#48A3B8"
                          }}
                          type="submit"
                          onClick={() => {
                            console.log("addbutton", this.state.errors);
                          }}
                        >
                          Add
                        </button>
                        <h1 style={{ color: "red" }}>
                          {/* {this.state.errors ? "you already posted" : ""} */}
                          {this.state.errors ? (
                            <Toast>
                              <ToastHeader>
                                <img
                                  src="holder.js/20x20?text=%20"
                                  className="rounded mr-2"
                                  alt=""
                                />
                                <strong className="mr-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                              </ToastHeader>
                              <ToastBody>
                                Sorry, but this item already exists
                              </ToastBody>
                            </Toast>
                          ) : null}
                        </h1>
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

export default AddFoodItem;
