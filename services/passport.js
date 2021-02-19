const passport = require("passport");
const GoogleStratagy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// Model Class
const User = mongoose.model("users");

// third arg is the redirect URL after user grants permission
passport.use(
  new GoogleStratagy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id }).save().then((user) => {
            done(null, user);
          });
        }
      });
    }
  )
);
