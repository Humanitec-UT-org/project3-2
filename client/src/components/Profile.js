import React, { Component } from "react";
import ManualSearch from "./ManualSearch";
import ReactMinimalPieChart from "react-minimal-pie-chart";
import axios from "axios";
import Canvas from "./styleCanvas/Canvas";
import CanvasFruits from "./styleCanvas/CanvasFruits";
import CanvasFish from "./styleCanvas/CanvasFish";
import CanvasFat from "./styleCanvas/CanvasFat";
import CanvasDairy from "./styleCanvas/CanvasDairy";
import CanvasGrain from "./styleCanvas/CanvasGrain";
import CanvasMeat from "./styleCanvas/CanvasMeat";
import CanvasSeed from "./styleCanvas/CanvasSeed";
import CanvasSpice from "./styleCanvas/CanvasSpice";
import CanvasVegetable from "./styleCanvas/CanvasVegetable";
import Trash from "./Trash";

// fat
// meat
// vegetable

// foods from /api/food
export class Profile extends Component {
  state = {
    addedFooditems: [],
    user: ""
  };

  componentDidMount() {
    axios.get("/api/foods/user-list").then(response => {
      this.setState({
        addedFooditems: response.data
      });
    });
    // help needed
    // axios.get("/api/auth/checkuser").then(response => {
    //   this.setState({
    //     user: response.user.name
    //   });
    // });
  }

  deleteItemHandler = (foodItem, index) => {
    // filteredFoodItems is the array without the passed foodItem
    let filteredFoodItems = this.state.addedFooditems.filter(
      e => e !== foodItem
    );
    console.log("deleting ", foodItem);
    axios
      .post("/api/foods", { addedFooditems: filteredFoodItems })
      .then(response => {
        // const myFoodItemsCopy = [...this.state.loggedInUser.addedFooditems];
        // myFoodItemsCopy.splice(index + 1, 1);
        this.setState({
          addedFooditems: response.data
        });
      });
  };

  render() {
    const sum = this.state.addedFooditems
      .reduce((a, c) => a + c.emission, 0)
      .toFixed(1);
    // const sum = this.state.addedFooditems.reduce(
    //   (a, c) => (a = a || 0 + (c = c || 0).emission),
    //   0
    // );
    // fat
    const fatItems = this.state.addedFooditems.filter(d => d.group === "fat");
    const fatSum = fatItems.reduce((a, c) => a + c.emission, 0);
    console.log("summe fat", fatSum);
    // vegetable
    const vegetableItems = this.state.addedFooditems.filter(
      d => d.group === "vegetable"
    );
    const vegetableSum = vegetableItems.reduce((a, c) => a + c.emission, 0);
    // meat
    const meatItems = this.state.addedFooditems.filter(d => d.group === "meat");
    const meatSum = meatItems.reduce((a, c) => a + c.emission, 0);
    // grain
    const grainItems = this.state.addedFooditems.filter(
      d => d.group === "grain"
    );
    const grainSum = grainItems.reduce((a, c) => a + c.emission, 0);
    // seed
    const seedItems = this.state.addedFooditems.filter(d => d.group === "seed");
    const seedSum = seedItems.reduce((a, c) => a + c.emission, 0);

    // dairy
    const dairyItems = this.state.addedFooditems.filter(
      d => d.group === "dairy"
    );
    const dairySum = dairyItems.reduce((a, c) => a + c.emission, 0);
    // fruits
    const fruitItems = this.state.addedFooditems.filter(
      s => s.group === "fruits"
    );
    const fruitSum = fruitItems.reduce((a, c) => a + c.emission, 0);
    // spice
    const spiceItems = this.state.addedFooditems.filter(
      s => s.group === "spices"
    );
    const spiceSum = spiceItems.reduce((a, c) => a + c.emission, 0);
    // fish
    const fishItems = this.state.addedFooditems.filter(f => f.group === "fish");
    const fishSum = fishItems.reduce((a, c) => a + c.emission, 0);
    const leftoverEmission =
      1500 -
      (fishSum +
        spiceSum +
        fruitSum +
        seedSum +
        grainSum +
        meatSum +
        vegetableSum +
        fatSum);

    console.log("fishSum", fishSum);
    console.log("leftoverEmission", leftoverEmission);
    //const sum = this.props.user.addedFooditems[0].emission;
    let styles1 = {
      marginLeft: "100"
    };
    return (
      <div>
        {/* {console.log(this)}
        Hello,{this.state.user} */}
        {this.props.user ? this.props.user.username : "Stranger"} <br></br>
        <div className="container" style={{ margin: "0 0 60 60" }}>
          <div className="row">
            <div className="col-8">
              <ReactMinimalPieChart
                animate={false}
                animationDuration={500}
                animationEasing="ease-out"
                cx={50}
                cy={50}
                data={[
                  { title: "Fish", value: fishSum, color: "#007499" },
                  //
                  { title: "Spices", value: spiceSum, color: "#E0D35C" },
                  // gelb
                  { title: "Fruits", value: fruitSum, color: "#88D176" },
                  // grün
                  { titel: "Dairy", value: dairySum, color: "#9335AA" },
                  // blau
                  { titel: "Seed", value: seedSum, color: "#D6872C" },
                  // orange
                  { titel: "Grain", value: grainSum, color: "#E91C59" },
                  // blau
                  { titel: "Veggies", value: grainSum, color: "#7ED5F0" },
                  { titel: "Meat", value: grainSum, color: "#794E1B" },
                  { titel: "Fat", value: grainSum, color: "#FF0312" },
                  {
                    title: "Leftover",
                    value: leftoverEmission,
                    color: "#000000"
                  }
                  // schwarz
                ]}
                label={false}
                labelPosition={50}
                lengthAngle={-360}
                lineWidth={20}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={0}
                radius={35}
                rounded={false}
                startAngle={0}
                viewBoxSize={[100, 100]}
              />
              absatz unter dem chart lorem ipsum bla lorem ipsum bla lorem ipsum
              bla lorem ipsum bla lorem ips lorem ipsum bla lorem ipsum bla
              lorem ipsum bla lorem ipsum bla lorem ips lorem ipsum bla lorem
              ipsum bla lorem ipsum bla lorem ipsum bla lorem ips lorem ipsum
              bla lorem ipsum bla lorem ipsum bla lorem ipsum bla lorem ipsum
              bla lorem ipsum bla lorem ipsum bla lorem ipsum bla lorem ipsum
              bla lorem ipsum bla lorem ipsum bla lorem ipsum bla lorem ipsum
              bla lorem ipsum bla lorem ipsum bla lorem ipsum bla lorem ipsum
              bla lorem ipsum bla lorem ipsum bla lorem ipsum bla
            </div>
            <div className="col-4">
              <h5 style={{ fontWeight: "700" }}>
                Items you added to your foodprint:
              </h5>
              <div
                id="scroll3"
                className="cardScroll w-60 card"
                data-mcs-auto-hide-scrollbar="true"
                ref={a => (this._acc = a)}
                onClick={this._handleClick}
                style={{ backgroundColor: "transparent" }}
              >
                {this.props.children}
                <p id="list-item">
                  {this.state.addedFooditems.map(item => (
                    <div>
                      {item.name}
                      <button
                        style={{ backgroundColor: "transparent" }}
                        onClick={() => {
                          // help needed
                          console.log(item);
                          this.deleteItemHandler(item);
                        }}
                      >
                        <Trash />
                      </button>
                    </div>
                  ))}
                </p>
              </div>
              <table className="table" style={{ padding: "0.5rem" }}>
                <tr>
                  <th width="20" height="20">
                    <CanvasFruits></CanvasFruits>
                  </th>
                  <th>fruits</th>
                  <th width="20" height="20">
                    <CanvasVegetable></CanvasVegetable>
                  </th>
                  <th>vegetable</th>
                </tr>
                <tr>
                  <td>
                    <CanvasFish></CanvasFish>
                  </td>
                  <td>fish</td>
                  <th width="20" height="20">
                    <CanvasSpice></CanvasSpice>
                  </th>
                  <th>spice</th>
                </tr>
                <tr>
                  <th width="20" height="20">
                    <CanvasFat></CanvasFat>
                  </th>
                  <th>fat</th>
                  <th width="20" height="20">
                    <CanvasMeat>meat</CanvasMeat>
                  </th>
                  <th>meat</th>
                </tr>
                <tr>
                  <th width="20" height="20">
                    <CanvasDairy>dairy</CanvasDairy>
                  </th>
                  <th>dairy</th>
                  <th width="20" height="20">
                    <CanvasSeed>seed</CanvasSeed>
                  </th>
                  <th>seed</th>
                </tr>
                <tr>
                  <th width="20" height="20">
                    <CanvasGrain>grain</CanvasGrain>
                  </th>
                  <th>grain</th>
                  <th width="20" height="20">
                    Summe:
                  </th>
                  <th>
                    {" "}
                    {sum} gr <br />
                    of 1.5 t
                  </th>
                </tr>
              </table>
              <Canvas /> shows your remaining emission for this month!
              <br />
              blabla
            </div>
          </div>
        </div>
        {/* <ManualSearch addToProfile={this.props.addFood} /> */}
        {/* <SingleFoodItem></SingleFoodItem> */}
      </div>
    );
  }
}

export default Profile;
