import React, { Component } from "react";
import { Navbar, Nav, Button, Form, FormControl, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import CSS from "../App.css";
export default class myNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isEmptyState: true };
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    });
  };

  LogoutHandler = () => {
    axios
      .get("/api/auth/logout")
      .then(res => {
        console.log(res, "res");
        this.props.updateUser(null);
        res.render("/");
      })
      .catch(err => {
        console.log("something went wrong with Logout", err);
      });
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/Home">Navbar</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>

          {this.props.user ? (
            <div>
              <Button variant="outline-info" onClick={this.LogoutHandler}>
                Logout
              </Button>
              <Link to="/scan">
                <Button variant="outline-info">Scan</Button>
              </Link>
              <Link to="/profile">
                <Button variant="outline-info">Profile</Button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/signup">
                <Button variant="outline-info">Signup</Button>
              </Link>
              <Link to="/login">
                <Button variant="outline-info" onClick={this.displayQuestion}>
                  Login
                </Button>
              </Link>
            </div>
          )}
        </Navbar>
      </div>
    );
  }
}
