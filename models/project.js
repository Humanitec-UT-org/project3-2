// instead of import we use require
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  img: {
    type: String,
    default:
      "http://pluspng.com/img-png/gruner-apfel-png-die-aktuellesten-stellen-aus-dem-bereich-medical-2008.png"
  },
  code: String,
  group: String,
  emission: Number,
  car: Number,
  owner: { type: Schema.Types.ObjectId, ref: "User" }
  // every foodItem belongs to an User
});

const Project = mongoose.model("Project", projectSchema);

// same as "export default"
module.exports = Project;
