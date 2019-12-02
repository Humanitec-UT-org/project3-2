import React, { Component } from "react";
import ManualSearch from "./ManualSearch";
import PieChart from "react-minimal-pie-chart";
import FoodList from "./FoodList";
// foods from /api/food
//
export class Profile extends Component {
  render() {
    return (
      <div>
        {this.props.user.addedFooditems.map(item => (
          <div>
            <h1>{item.name}</h1>
            <h1>{item.img}</h1>
            <button
              onClick={() => {
                console.log(item);
                this.props.deleteItem(item);
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <ManualSearch addToProfile={this.props.addFood} />
        <PieChart
          className="PieChartProfile"
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" }
          ]}
        />
        <FoodList></FoodList>
        {/* ;type dataProps = {
  value: number;
  color: string;
  title?: string | number;
  key?: string | number;
  style?: { [key: string]: string | number }; */}
        {/* this.props.searchTerm */}
      </div>
    );
  }
}

export default Profile;
