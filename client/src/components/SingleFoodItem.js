import React from "react";
import PlusCircle from "../components/styleLogos/Plus-Circle";

export class SingleFoodItem extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }
  changeVisible = () => {
    this.props.isVisible();
  };
  handleItem = () => {
    this.props.addFood(this.props.item);
    console.log("hello", this.props.item.name);
    this.props.isVisible();

    console.log("versuche", this.props.isVisible);
    // i want this but another context > speicher this kurz vorher in that
    const that = this;
    function hide() {
      that.props.isVisible(false);
    }
    setTimeout(hide, 2000);
  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th width={100}>{this.props.item.name}</th>
              <th>
                <button
                  onClick={this.handleItem}
                  style={{ backgroundColor: "transparent" }}
                >
                  <PlusCircle />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
        {/* exmaple show true onClick  */}
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
