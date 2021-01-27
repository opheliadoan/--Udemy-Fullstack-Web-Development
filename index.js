const express = require("express");
const passport = require("passport");
const GoogleStratagy = require("passport-google-oauth20").Strategy;
const keys = require("./config/key");

const app = express();

// third arg is the redirect URL after user grants permission
passport.use(
  new GoogleStratagy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// default (development environment) is 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
