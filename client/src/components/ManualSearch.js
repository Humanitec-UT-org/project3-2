import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import $ from "jquery";
import SingleFoodItem from "./SingleFoodItem";
import "./styleScrollBar.css";

class ManualSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: [],
      foods: []
    };
  }
  componentDidMount() {
    $(function() {
      $(window).on("load", function() {
        $("#scroll3").mCustomScrollbar({
          scrollButtons: {
            enable: true
          },
          theme: "dark-thin",
          scrollbarPosition: "outside",
          autoHideScrollbar: false,
          alwaysShowScrollbar: 2
        });
      });
    });
  }
  getFoodBySearch = () => {
    axios
      .get("/api/foods?searchTerm=" + this.state.searchTerm)
      .then(response => {
        // use console.log !
        console.log("response.data : " + JSON.stringify(response.data));
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
    const icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="feather feather-search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    );
    return (
      <div>
        <div
          id="scroll3"
          className="cardScroll w-50 card mt-4 card-body mCustomScrollbar"
          data-mcs-theme="minimal-dark"
          data-mcs-auto-hide-scrollbar="true"
          ref={a => (this._acc = a)}
          onClick={this._handleClick}
        >
          {this.props.children}
          result:
          <h4 id="list-item">
            {this.state.foods.map(food => (
              <SingleFoodItem
                item={food}
                addToProfile={this.props.addToProfile}
                deleteItem={this.props.deleteItem}
              />
            ))}
          </h4>
        </div>
        {/* </div> */}
        <div className="input-group-prepend justify-content-center">
          <Form onSubmit={this.handleFormSubmit}>
            <input
              className="input"
              type="text"
              name="searchTerm"
              placeholder="search"
              onChange={this.changeHandler}
            />
            <Button
              className="submit"
              aria-hidden="true"
              type="text"
              name="searchTerm"
            >
              {icon}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default ManualSearch;
