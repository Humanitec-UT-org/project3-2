import React from "react";
import axios from "axios";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import ReactNotifications from "react-notifications-component";
import { Redirect, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Foods from "./components/FoodList";
import "./App.css";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Manualsearch from "./components/ManualSearch";
import AddFoodItem from "./components/AddFoodItem";
import SingleFoodItem from "./components/SingleFoodItem";

class App extends React.Component {
  state = {
    loggedInUser: this.props.user,
    isVisible: true
  };

  updateUserHandler = userObj => {
    console.log("updating user");
    console.log(userObj);
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
    let newFoodItems = [...this.state.loggedInUser.addedFooditems, foodItem];
    axios
      .post("/api/foods", { addedFooditems: newFoodItems })
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

  render() {
    return (
      <div className="Main">
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
            path="/add"
            render={() => {
              return (
                <div>
                  <ReactNotifications />
                  <AddFoodItem />
                </div>
              );
            }}
          ></Route>
          <Route
            path="/search"
            render={() => {
              return (
                <div>
                  <Manualsearch addFood={this.addFoodHandler}></Manualsearch>
                </div>
              );
            }}
          ></Route>
          <Route
            path="/profile"
            render={() => {
              if (this.state.loggedInUser) {
                return <Profile user={this.state.loggedInUser}></Profile>;
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
