import React, { Component } from "react";
import ManualSearch from "./ManualSearch";
import ReactMinimalPieChart from "react-minimal-pie-chart";
import axios from "axios";

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
    const sum = this.state.addedFooditems.reduce((a, c) => a + c.emission, 0);
    // const sum = this.state.addedFooditems.reduce(
    //   (a, c) => (a = a || 0 + (c = c || 0).emission),
    //   0
    // );
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
      60 - (fishSum + spiceSum + fruitSum + seedSum + grainSum);

    console.log("fishSum", fishSum);
    console.log("leftoverEmission", leftoverEmission);
    //const sum = this.props.user.addedFooditems[0].emission;
    let styles1 = {
      borderColor: "red"
    };
    return (
      <div>
        {console.log(this)}
        Hello,{this.state.user}
        {this.props.user ? this.props.user.username : "Stranger"} <br></br>
        Summe: {sum}
        <div className="container" style={styles1}>
          <div className="row">
            <div className="col-8">
              <ReactMinimalPieChart
                animate={false}
                animationDuration={500}
                animationEasing="ease-out"
                cx={50}
                cy={50}
                data={[
                  { title: "Fish", value: fishSum, color: "#E38627" },
                  // orange
                  { title: "Spices", value: spiceSum, color: "#ea899a" },
                  // rosa
                  { title: "Fruits", value: fruitSum, color: "#00FF00" },
                  // grün
                  { titel: "Dairy", value: dairySum, color: "#add8e6" },
                  // blau
                  { titel: "Seed", value: seedSum, color: "#add8e6" },
                  // blau
                  { titel: "Grain", value: grainSum, color: "#add8e6" },
                  // blau
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
                radius={40}
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
              <div
                id="scroll3"
                className="cardScroll w-60 card  card-body mCustomScrollbar"
                data-mcs-theme="minimal-dark"
                data-mcs-auto-hide-scrollbar="true"
                ref={a => (this._acc = a)}
                onClick={this._handleClick}
              >
                {this.props.children}
                added to your profile result
                <h4 id="list-item">
                  {this.state.addedFooditems.map(item => (
                    <div>
                      <li>
                        {item.name}
                        <button
                          onClick={() => {
                            // help needed
                            console.log(item);
                            this.deleteItemHandler(item);
                          }}
                        >
                          <Trash />
                        </button>
                      </li>
                    </div>
                  ))}
                </h4>
              </div>
              absatz rechts neben dem chart lorem ipsum bla lorem ipsum bla
              lorem ipsum bla lorem ipsum bla lorem ips lorem ipsum bla lorem
              ipsum bla lorem ipsum bla lorem ipsum bla lorem ips lorem ipsum
              bla lorem ipsum bla lorem ipsum bla lorem ipsum bla lorem ips
              lorem ipsum bla lorem ipsum bla lorem ipsum bla lorem ipsum bla
              lorem ipsum bla lorem ipsum bla lorem ipsum bla lorem ipsum bla
              lorem ipsum bla lorem ipsum bla lorem ipsum bla lorem ipsum bla
              lorem ipsum bla lorem ipsum bla lorem ipsum bla lorem ipsum bla
              lorem ipsum bla lorem ipsum bla lorem ipsum bla lorem ipsum bla
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
