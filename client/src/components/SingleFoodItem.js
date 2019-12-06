import React from "react";

export class SingleFoodItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.item.name}
        <button onClick={() => this.props.addToProfile(this.props.item)}>
          Add to Profile
        </button>
      </div>
    );
  }
}

export default SingleFoodItem;
