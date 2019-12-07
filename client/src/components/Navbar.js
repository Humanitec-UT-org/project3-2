import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Button,
  ButtonToolbar,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

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

          {this.props.user ? (
            <div>
              <ButtonToolbar>
                <Button variant="outline-info" onClick={this.LogoutHandler}>
                  Logout
                </Button>

                <Link to="/add">
                  <Button variant="outline-info">Add</Button>
                </Link>

                <Link to="/profile">
                  <Button variant="outline-info">Profile</Button>
                </Link>

                {["bottom"].map(placement => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        Search for food you can add to your profile
                      </Tooltip>
                    }
                  >
                    <Link to="/search">
                      <Button variant="outline-info">Search</Button>
                    </Link>
                  </OverlayTrigger>
                ))}
              </ButtonToolbar>
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
