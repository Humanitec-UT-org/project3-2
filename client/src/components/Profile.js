import React, { Component } from "react";
import ManualSearch from "./ManualSearch";
import PieChart from "react-minimal-pie-chart";
import FoodList from "./FoodList";
import { Row, Container, Col } from "react-bootstrap";
// foods from /api/food
//
export class Profile extends Component {
  render() {
    const sum = this.props.user.addedFooditems.reduce(
      (a, c) => a + c.emission,
      0
    );
    const fishItems = this.props.user.addedFooditems.filter(
      f => f.group === "fish"
    );
    const fishSum = fishItems.reduce((a, c) => a + c.emission, 0);
    const leftoverEmission = 100 - fishSum;
    console.log("fishSum", fishSum);
    console.log("leftoverEmission", leftoverEmission);
    //const sum = this.props.user.addedFooditems[0].emission;
    return (
      <div className="Profile">
        <Container>
          Summe : {sum}
          {this.props.user.addedFooditems.map(item => (
            <div>
              <h1>{item.name}</h1>
              <h1></h1>
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
              { title: "Fish", value: fishSum, color: "#E38627" },
              { title: "Leftover", value: leftoverEmission, color: "#99999" }
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
        </Container>
      </div>
    );
  }
}

export default Profile;
