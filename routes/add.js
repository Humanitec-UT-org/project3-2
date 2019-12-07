var express = require("express");
var addRouter = express.Router();

/* GET home page. */
addRouter.get("/", function(req, res, next) {
  res.render();
});

module.exports = addRouter;
