var express = require("express");
var aboutRouter = express.Router();
aboutRouter.get("/about", function(req, res, next) {
  res.render("about", { title: "Hello" });
});

module.exports = aboutRouter;
