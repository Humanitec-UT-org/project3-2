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
    errors: false
  };

  submitHandler = event => {
    event.preventDefault();
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
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ emission: e.target.value });
    }
  };

  render() {
    console.log(this.state.errors);
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
                            id="inputEmission"
                            className="form-control"
                            placeholder="Emission"
                            name="emission"
                            onChange={this.changeEmissionHandler}
                            value={this.state.emission}
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
                          >
                            <option value="DEFAULT" disabled>
                              Choose...
                            </option>

                            <option value="1">dairy</option>
                            <option value="2">fat</option>
                            <option value="3">fish</option>
                            <option value="3">fruits</option>
                            <option value="3">grain</option>
                            <option value="3">meat</option>
                            <option value="3">seed</option>
                            <option value="3">spices</option>
                            <option value="3">vegetable</option>
                          </select>
                        </div>

                        <button
                          className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
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
                                Sorry, but xxx is already added
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
