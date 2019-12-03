import React from "react";
import axios from "axios";

import { Redirect, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Foods from "./components/FoodList";
import "./App.css";
import Profile from "./components/Profile";
import Home from "./components/Home";
import AddFoodItem from "./components/AddFoodItem";

class App extends React.Component {
  state = {
    loggedInUser: this.props.user,
    isVisible: true
  };

  updateUserHandler = userObj => {
    // console.log("updating user");
    // console.log(userObj);
    this.setState({
      loggedInUser: userObj
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        isVisible: false
      },
      function() {
        console.log(this.state.isVisible);
      }
    );
    return false;
  };
  handleRemount = e => {
    this.setState(
      {
        isVisible: true
      },
      function() {
        console.log(this.state.isVisible);
      }
    );
    e.preventDefault();
  };

  addFoodHandler = foodItem => {
    axios
      .post("/api/foods", { id: foodItem._id })
      .then(response => {
        this.setState({
          loggedInUser: {
            ...this.state.loggedInUser,
            addedFooditems: response.data
          }
        });
      })
      .catch(() => {});
  };

  deleteItemHandler = (foodItem, index) => {
    console.log("deleting ", foodItem);
    axios.delete("/api/foods/delete/" + foodItem._id).then(response => {
      // const myFoodItemsCopy = [...this.state.loggedInUser.addedFooditems];
      // myFoodItemsCopy.splice(index + 1, 1);
      this.setState({
        loggedInUser: {
          ...this.state.loggedInUser,
          addedFooditems: response.data
        }
      });
    });
  };

  render() {
    return (
      <div>
        Hello,
        {this.state.loggedInUser
          ? this.state.loggedInUser.username
          : "Stranger"}
        !
        <Navbar
          updateUser={this.updateUserHandler}
          user={this.state.loggedInUser}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route
            path="/home"
            render={() => {
              if (this.state.loggedInUser == null) return <Home />;
            }}
          /> */}
          <Route
            path="/login"
            render={() => {
              if (this.state.loggedInUser) {
                return <Redirect to="/profile"></Redirect>;
              } else {
                return <Login updateUser={this.updateUserHandler}></Login>;
              }
            }}
          ></Route>
          <Route
            path="/scan"
            render={() => {
              return <AddFoodItem />;
            }}
          ></Route>
          <Route
            path="/profile"
            render={() => {
              if (this.state.loggedInUser) {
                return (
                  <Profile
                    user={this.state.loggedInUser}
                    addFood={this.addFoodHandler}
                    deleteItem={this.deleteItemHandler}
                  ></Profile>
                );
              } else {
                return <Redirect to="/"></Redirect>;
              }
            }}
          ></Route>

          <Route
            path="/signup"
            render={() => {
              if (this.state.loggedInUser) {
                return <Redirect to="/profile"></Redirect>;
              } else {
                return (
                  <div>
                    <Signup
                      history={this.props.history}
                      updateUser={this.updateUserHandler}
                    ></Signup>
                  </div>
                );
              }
            }}
          ></Route>

          <Route path="/foodsExtended" render={() => <Foods></Foods>}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
