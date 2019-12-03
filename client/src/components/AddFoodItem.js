import React from "react";
import axios from "axios";

class AddFoodItem extends React.Component {
  state = {
    name: "",
    emission: ""
  };

  submitHandler = event => {
    event.preventDefault();
    // send the data to the backend
    axios
      .post("/api/foods/add-to-list", this.state)
      .then(response => {
        this.setState({
          name: "",
          emission: ""
        });

        this.props.addProject();
        // const newlyCreatedProject = response.data
        // this.props.addProject(newlyCreatedProject) // { title, description, _id }
      })
      .catch(() => {});
  };

  changeNameHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  changeEmissionHandler = e => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ emission: e.target.value });
    }
  };

  render() {
    return (
      <div>
        <h3>Add a new Product: </h3>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeNameHandler}
            value={this.state.name}
            type="text"
            placeholder="Name"
          ></input>
          <br></br>
          <input
            onChange={this.changeEmissionHandler}
            value={this.state.emission}
            type="text"
            placeholder="Emission"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFoodItem;
