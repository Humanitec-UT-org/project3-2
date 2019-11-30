const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

// happens once for each login
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

// happens on every request
passport.deserializeUser((id, cb) => {
  console.log(id);
  User.findById(id)
    .populate("addedFooditems")
    .exec((err, user) => {
      if (err) {
        return cb(err);
      }
      cb(null, user);
    });
});

passport.use(
  new LocalStrategy((username, password, next) => {
    User.findOne({ username })
      .populate("addedFooditems")
      .then(user => {
        if (!user || !bcrypt.compareSync(password, user.password)) {
          return next(null, false, { message: "Incorrect email or password" });
        }

        return next(null, user);
      });
  })
);
