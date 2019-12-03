let express = require("express");
let homeRouter = express.Router();

// GET
homeRouter.get("/", function(req, res, next) {
  res.render("home", { tite: "Welcome" });
});
module.exports = homeRouter;
