import React from "react";
import PlusCircle from "./Plus-Circle";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
export class SingleFoodItem extends React.Component {
  constructor() {
    super();
    this.state = {
      // visible: false
    };
  }
  changeVisible = () => {
    this.props.isVisible();
  };
  // handleItem = () => {
  //   this.props.addFood(this.props.item);
  //   this.setState({
  //     visible: true
  //   });
  // };
  render() {
    return (
      <div>
        {this.props.item.name}
        <button onClick={this.changeVisible}>
          <PlusCircle />
        </button>
        {/* this works! */}
        {/* <h1>{this.state.visible ? "item added true" : ""}</h1> */}
      </div>
    );
  }
}

export default SingleFoodItem;
// foodItem => {
//   axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/foods", {
//     id: foodItem._id
//   }).then(response => {
//     this.setState({
//       loggedInUser: _objectSprea…
