import React, { Component } from "react";
import axios from "axios";
//https://alligator.io/react/react-notifications-component/

import "react-notifications-component/dist/theme.css";
import "animate.css";
import { Form } from "react-bootstrap";

class AddFoodItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emission: "",
      group: "",
      errors: false,
      added: false
    };
  }
  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
    // das ist die antwort wenn erfolgreich geaddet
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
            errors: false,
            added: true
          });
        }
        console.log(response.data, "response");
        // das ist die antwort wenn erfolgreich geaddet
        this.setState({
          name: "",
          emission: "",
          group: ""
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
      this.setState({ emission: e.target.value.replace(",", ".") });
      console.log(this.state.emission);
    }
  };

  changeOptionHandler = e => {
    this.setState({ group: e.target.value }, () => {
      console.log("OPTION:", this.state.group);
    });
  };

  render() {
    console.log(this.state.errors);
    return (
      <div className="login">
        <div className="container-fluid">
          <div className="row no-gutter">
            {/* start */}
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    {/* help needed name the item existing/ added */}
                    {this.state.errors ? (
                      <div className="col-md-9 col-lg-8 mx-auto">
                        <h3 className="login-heading mb-4">Oops</h3>
                        <p>
                          {this.setState.name} this item already exists.
                          <br /> take a look in <i>Search</i>.
                        </p>
                      </div>
                    ) : null}
                    {this.state.added ? (
                      <div className="col-md-9 col-lg-8 mx-auto">
                        <h3 className="login-heading mb-4">Success</h3>
                        <p>
                          the new item was added successfully.
                          <br /> you can now look for it it in <i>Search</i>.
                        </p>
                      </div>
                    ) : null}
                    {/* von anfang an: no error no added */}
                    {/* already existing: hi error, no added */}
                    {/* new: no error, hi added */}
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
                      <h3 className="login-heading mb-4">add a new Product:</h3>
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
                            required
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
                            console.log("option value", this.state.option);
                          }}
                        >
                          Add
                        </button>
                        <h1 style={{ color: "red" }}></h1>
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
