// import React from "react";
// import axios from "axios";
// import { store } from "react-notifications-component";
// import "react-notifications-component/dist/theme.css";
// import "animate.css";
// import { Form } from "react-bootstrap";

// class AddFoodItem extends React.Component {
//   state = {
//     name: "",
//     emission: "",
//     errors: []
//   };

//   submitHandler = event => {
//     const {name, emission} = this.state
//     const errors = validate(name, emission);
//     if (errors.length > 0) {
//       this.setState({ errors });
//       return;
//     }

//     event.preventDefault();
//     // send the data to the backend
//     axios
//       .post("/api/foods/add-to-list", this.state)
//       .then(response => {
//         this.setState({
//           name: "",
//           emission: ""
//         });

//         this.props.addProject();
//         // const newlyCreatedProject = response.data
//         // this.props.addProject(newlyCreatedProject) // { title, description, _id }
//       })
//       .catch(() => {});
//   };

//   changeNameHandler = event => {
//     this.setState({
//       name: event.target.value
//     });
//   };

//   changeEmissionHandler = e => {
//     const re = /^[0-9\b]+$/;
//     if (e.target.value === "" || re.test(e.target.value)) {
//       this.setState({ emission: e.target.value });
//     }
//   };

//   render() {
//     const { errors } = this.state;

//     return (
//       <div className="login">
//         <div className="container-fluid">
//           <div className="row no-gutter">

//             <div className="col-md-8 col-lg-6">
//               <div className="login d-flex align-items-center py-5">
//                 <div className="container">
//                   <div className="row">
//                     <div className="col-md-9 col-lg-8 mx-auto">
//                       <h3 className="login-heading mb-4">Add a new Product:</h3>
//                       <Form onSubmit={this.submitHandler}>

//                         <div className="form-label-group">
//                           <input
//                             type="text"
//                             id="inputName"
//                             className="form-control"
//                             placeholder="Product Name"
//                             name="productname"
//                             onChange={this.changeNameHandler}
//                             value={this.state.name}
//                             required
//                             autoFocus
//                           ></input>
//                           <label htmlFor="inputName">Productname</label>
//                         </div>
//                         <div className="form-label-group">
//                           <input
//                             type="number"
//                             id="replyNumber"
//                             className="form-control"
//                             placeholder="Emission"
//                             name="emission"
//                             onChange={this.changeEmissionHandler}
//                             value={this.state.emission}
//                             required
//                             min="0"
//                             step="1"
//                             data-bind="value:replyNumber"
//                           ></input>
//                           <label htmlFor="inputEmission">Emission</label>
//                         </div>
//                         <button
//                           className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
//                           type="submit"
//                           onClick={() =>
//                             store.addNotification({
//                               title:
//                                 `${this.state.name}` +
//                                 " was added successfully!",
//                               message:
//                                 "You can now search for " +
//                                 `${this.state.name}`,
//                               type: "default", // 'default', 'success', 'info', 'warning'
//                               container: "bottom-left", // where to position the notifications
//                               animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
//                               animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
//                               dismiss: {
//                                 duration: 3000
//                               }
//                             });
//                           }
//                        / >
//                           Add
//                         </button>
//                       </Form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   }
// }

// export default AddFoodItem;
