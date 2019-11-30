import React from "react";
import axios from "axios";

class UserAddsFood extends React.Component {
  submitHandler = e => {
    e.preventDefault();
    const data = {
      name: this.props.searchTerm
    };
    console.log("Here is the added:", data.name);
    axios
      .post("/api/foods", data.name)
      .then(response => {
        // this.setState({
        //   name: ""
        // });
        const addedFooditems = response.data;
        this.props.addFood(addedFooditems);
      })
      .catch(() => {});
  };
  //   changeNameHandler = event => {
  //     this.setState({
  //       name: event.target.value
  //     });
  //   };

  render() {
    return <div></div>;
  }
}
export default UserAddsFood;
