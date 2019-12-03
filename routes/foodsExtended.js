// let express = require("express");
// let foodsRouter = express.Router();
// // let Food = require("../models/foodExtended");

// let foodFromList = require("../models/foodFromList");
// let User = require("../models/user");

// let mongoose = require("mongoose");

// // // GET api/foods
// // foodsRouter.get("/foods", function(req, res, next) {
// //   Food.find()
// //     .populate("project")
// //     .then(response => {
// //       res.json(response);
// //     });
// // });

// // GET /api/foods?searchTerm=butter
// foodsRouter.get("/", function(req, res, next) {
//   console.log("get api foods" + req.params);
//   let searchTerm = req.query.searchTerm;
//   // postman: testbeispiel localhost:5555/api/foods?searchTerm=olive_oil
//   foodFromList
//     .find({ name: { $regex: new RegExp(`^${searchTerm}`, "i") } })
//     .populate("User")
//     .then(response => {
//       res.json(response);
//       console.log("response from foodFromList", response);
//     });
// });

// // POST /api/foods
// foodsRouter.post("/", (req, res, next) => {
//   // { project_id : '1i263516253gd5', title: 'Clean the room' }
//   // console.log("food POST is here");
//   // user model:  addedFooditems: []
//   User.findByIdAndUpdate(
//     { _id: req.user.id },
//     { $push: { addedFooditems: req.body.id } },
//     { new: true }
//   )
//     .populate("addedFooditems")
//     .then(userObj => {
//       console.log("response from api/foods", userObj.addedFooditems);
//       res.json(userObj.addedFooditems);
//     });
// });

// // // delete food for later /api/foods/id
// foodsRouter.delete("/delete/:id", (req, res, next) => {
//   console.log("food POST delete on its way " + req.params.id);

//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   User.findByIdAndUpdate(
//     { _id: req.user.id },
//     { $pull: { addedFooditems: req.params.id } },
//     { new: true }
//   )
//     .populate("addedFooditems")
//     .then(userObj => {
//       console.log("response from api/foods", userObj.addedFooditems);
//       res.json(userObj.addedFooditems);
//     });
// });
// //   console.log("food POST delete on its way");
// //   if (id.match(/^[0-9a-fA-F]{24}$/)) {
// //     foodFromList
// //       .findByIdAndRemove({ _id: req.params.id })
// //       .catch(err => next(err));
// //   }
// // });
// module.exports = foodsRouter;
