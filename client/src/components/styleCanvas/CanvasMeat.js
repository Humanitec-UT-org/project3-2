import React from "react";

class CanvasMeat extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(10, 12, 9, 0, 2 * Math.PI);
    ctx.fillStyle = "#794E1B";
    ctx.fill();
    ctx.stroke();
  }
  render() {
    return <canvas ref="canvas" width={20} height={25} />;
  }
}

export default CanvasMeat;
