const passport = require("passport");
const GoogleStratagy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

// third arg is the redirect URL after user grants permission
passport.use(
  new GoogleStratagy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile: ", profile);
    }
  )
);
