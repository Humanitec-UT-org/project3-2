var express = require("express");
var router = express.Router();

let Food = require("../models/foodExtended");

// GET api/foods
router.get("/", function(req, res, next) {
  Food.find()
    .populate("project")
    .then(response => {
      res.json(response);
    });
});

// POST /api/foods
router.post("/", (req, res, next) => {
  // { project_id : '1i263516253gd5', title: 'Clean the room' }

  Food.create({
    project: req.body.project_id,
    title: req.body.title
  }).then(response => {
    res.json(response);
  });
});

module.exports = router;