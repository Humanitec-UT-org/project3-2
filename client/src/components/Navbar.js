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
// import DataBase from "./styleLogos/DataBase";
// import User from "./styleLogos/User";
// import PlusCircle from "./styleLogos/Plus-Circle";
import Info from "./styleLogos/Info";

import Power from "./styleLogos/Power";
import "bootstrap/dist/css/bootstrap.min.css";

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
        // help needed : cannot read push of undefined, do i need the following ?
        // this.props.history.push("/");
      })
      .catch(err => {
        console.log("something went wrong with Logout", err);
      });
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="../">
            Your Ecological Foodprint {/* info start */}
            {["bottom"].map(placement => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    Find references about this website
                  </Tooltip>
                }
              >
                <Link to="/about">
                  <Button
                    variant="outline-info"
                    style={{
                      borderColor: "transparent",
                      backgroundColor: "transparent"
                    }}
                  >
                    <Info />
                  </Button>
                </Link>
              </OverlayTrigger>
            ))}
            {/* info end */}
          </Navbar.Brand>

          <Nav className="mr-auto"></Nav>

          {this.props.user ? (
            <div>
              <ButtonToolbar>
                {/* profile start */}
                {["bottom"].map(placement => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        Go to your profile
                      </Tooltip>
                    }
                  >
                    <Link to="/profile">
                      <Button variant="outline-info">
                        {/* <User /> */} profile
                      </Button>
                    </Link>
                  </OverlayTrigger>
                ))}
                {/* profile end */}

                {/* add start */}
                {["bottom"].map(placement => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        Something missing? Go here to add items to the database
                      </Tooltip>
                    }
                  >
                    <Link to="/add">
                      <Button variant="outline-info">
                        {/* <DataBase /> */} create
                      </Button>
                    </Link>
                  </OverlayTrigger>
                ))}
                {/* add end */}
                {/* search start */}
                {["bottom"].map(placement => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        Add items to your personal profile
                      </Tooltip>
                    }
                  >
                    <Link to="/search">
                      <Button variant="outline-info">
                        {/* <PlusCircle /> */} add
                      </Button>
                    </Link>
                  </OverlayTrigger>
                ))}
                {/* search end */}
                {/* logout start */}
                {["bottom"].map(placement => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>Goodbye!</Tooltip>
                    }
                  >
                    <Button variant="outline-info" onClick={this.LogoutHandler}>
                      <Power />
                    </Button>
                  </OverlayTrigger>
                ))}
                {/* logout end */}
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
