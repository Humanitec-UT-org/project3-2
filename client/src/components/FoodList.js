import React, { Component } from "react";
import { Chart, PieSeries, Title } from "@devexpress/dx-react-chart-bootstrap4";
import { Animation } from "@devexpress/dx-react-chart";

export default class FoodList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { region: "Asia", val: 4119626293, fill: "#00000" },
        { region: "Africa", val: 1012956064, fill: "#0073DC" },
        { region: "Northern America", val: 344124520, fill: "#0073DC" },
        {
          region: "Latin America and the Caribbean",
          val: 590946440,
          color: "blue"
        },
        { region: "Europe", val: 727082222, color: "#E38627" },
        { region: "Oceania", val: 35104756, color: "#E38627" }
      ]
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div className="card">
        <Chart data={chartData}>
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
          />
          <Title text="Your FoodPrint" />
          <Animation />
        </Chart>
      </div>
    );
  }
}
