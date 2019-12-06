import React, { Component } from "react";
import ManualSearch from "./ManualSearch";
import PieChart from "react-minimal-pie-chart";
import $ from "jquery";
import SingleFoodItem from "./SingleFoodItem";
// fat
// meat
// vegetable

// foods from /api/food
export class Profile extends Component {
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
  render() {
    const sum = this.props.user.addedFooditems.reduce(
      (a, c) => a + c.emission,
      0
    );
    // grain
    const grainItems = this.props.user.addedFooditems.filter(
      d => d.group === "grain"
    );
    const grainSum = grainItems.reduce((a, c) => a + c.emission, 0);
    // seed
    const seedItems = this.props.user.addedFooditems.filter(
      d => d.group === "seed"
    );
    const seedSum = seedItems.reduce((a, c) => a + c.emission, 0);

    // dairy
    const dairyItems = this.props.user.addedFooditems.filter(
      d => d.group === "dairy"
    );
    const dairySum = dairyItems.reduce((a, c) => a + c.emission, 0);
    // fruits
    const fruitItems = this.props.user.addedFooditems.filter(
      s => s.group === "fruits"
    );
    const fruitSum = fruitItems.reduce((a, c) => a + c.emission, 0);
    // spice
    const spiceItems = this.props.user.addedFooditems.filter(
      s => s.group === "spices"
    );
    const spiceSum = spiceItems.reduce((a, c) => a + c.emission, 0);
    // fish
    const fishItems = this.props.user.addedFooditems.filter(
      f => f.group === "fish"
    );
    const fishSum = fishItems.reduce((a, c) => a + c.emission, 0);
    const leftoverEmission =
      60 - (fishSum + spiceSum + fruitSum + seedSum + grainSum);

    console.log("fishSum", fishSum);
    console.log("leftoverEmission", leftoverEmission);
    //const sum = this.props.user.addedFooditems[0].emission;

    return (
      <div>
        Hello,
        {this.props.user ? this.props.user.username : "Stranger"} <br></br>
        Summe: {sum}
        <div
          id="scroll3"
          className="cardScroll w-50 card mt-4 card-body mCustomScrollbar"
          data-mcs-theme="minimal-dark"
          data-mcs-auto-hide-scrollbar="true"
          ref={a => (this._acc = a)}
          onClick={this._handleClick}
        >
          {this.props.children}
          result
          <h4 id="list-item">
            {this.props.user.addedFooditems.map(item => (
              <div>
                <h4>{item.name}</h4>

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
          </h4>
        </div>
        <ManualSearch addToProfile={this.props.addFood} />
        {/* <SingleFoodItem></SingleFoodItem> */}
        <PieChart
          className="PieChartProfile"
          data={[
            { title: "Fish", value: fishSum, color: "#E38627" },
            // orange
            { title: "Spices", value: spiceSum, color: "#ea899a" },
            // rosa
            { title: "Fruits", value: fruitSum, color: "#00FF00" },
            // grün
            { titel: "Dairy", value: dairySum, color: "add8e6" },
            // blau
            { titel: "Seed", value: seedSum, color: "add8e6" },
            // blau
            { titel: "Grain", value: grainSum, color: "add8e6" },
            // blau
            { title: "Leftover", value: leftoverEmission, color: "#000000" }
            // schwarz
          ]}
        />
      </div>
    );
  }
}

export default Profile;
