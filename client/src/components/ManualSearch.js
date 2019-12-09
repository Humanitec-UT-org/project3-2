import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

import SingleFoodItem from "./SingleFoodItem";
import "./styleScrollBar.css";

class ManualSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: [],
      foods: [],
      visible: false
    };
    this.isVisible = this.isVisible.bind(this);
  }
  isVisible = function(newState) {
    if (newState === undefined) {
      newState = true;
    }
    this.setState({ visible: newState });
  };
  getFoodBySearch = () => {
    axios
      .get("/api/foods?searchTerm=" + this.state.searchTerm)
      .then(response => {
        // console.log("response.data : " + JSON.stringify(response.data));
        this.setState({ foods: response.data }); // this triggers a re-render
      });
  };

  handleFormSubmit = e => {
    // Prevent button click from submitting form
    e.preventDefault();
    this.getFoodBySearch();
  };
  changeHandler = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <div className="login">
        <div className="container-fluid">
          <div className="row no-gutter">
            {/* start */}
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    {this.state.foods === [] ? (
                      <p>true</p>
                    ) : (
                      <p>{this.state.foods.name}</p>
                    )}
                    {this.state.visible ? (
                      <div className="col-md-9 col-lg-8 mx-auto">
                        <h3 className="login-heading mb-4">Success</h3>
                        <div className="form-label-group">
                          <p>you successfully did this & that</p>
                          <div className="container"></div>
                        </div>
                      </div>
                    ) : null}
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
                      <h3 className="login-heading mb-4">Search & Add</h3>

                      <div className="container">
                        <div
                          id="scroll3"
                          className="cardScroll w-80 card-body"
                          style={{ backgroundColor: "transparent" }}
                          data-mcs-theme="minimal-dark"
                          data-mcs-auto-hide-scrollbar="true"
                          ref={a => (this._acc = a)}
                          onClick={this._handleClick}
                        >
                          {this.props.children}

                          <h4 id="list-item">
                            {/* {console.log(
                              "in manualsearch:",
                              this.props.addFood
                              
                            )} */}
                            {console.log(
                              "in manualsearch:",
                              this.getFoodBySearch
                            )}

                            {this.state.foods.map(food => (
                              <SingleFoodItem
                                item={food}
                                addFood={this.props.addFood}
                                isVisible={this.isVisible}
                                // deleteItem={this.props.deleteItem}
                              />
                            ))}
                          </h4>
                        </div>
                      </div>
                      <Form onSubmit={this.handleFormSubmit}>
                        <label for="inputEmission"></label>
                        <div className="form-label-group">
                          <input
                            type="text"
                            className="form-control"
                            id="searchTerm"
                            name="searchTerm"
                            className="form-control"
                            placeholder="Enter here what you are looking for"
                            onChange={this.changeHandler}
                            required
                            autoFocus
                          />
                        </div>

                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label for="inputAdding"></label>
                        <button
                          className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                          type="submit"
                          style={{
                            backgroundColor: "#48A3B8",
                            borderColor: "#48A3B8"
                          }}
                        >
                          Search
                        </button>
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
export default ManualSearch;
