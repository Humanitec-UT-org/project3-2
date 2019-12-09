import React from "react";

class CanvasDairy extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(10, 12, 9, 0, 2 * Math.PI);
    ctx.fillStyle = "#9335AA";
    ctx.fill();
    ctx.stroke();
  }
  render() {
    return <canvas ref="canvas" width={20} height={25} />;
  }
}

export default CanvasDairy;