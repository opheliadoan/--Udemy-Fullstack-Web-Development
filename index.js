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
    (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile: ", profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback", passport.authenticate("google"));

// default (development environment) is 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=804899986451-vq9gmmval9kceoq91o65t276k21nfqfd.apps.googleusercontent.com&flowName=GeneralOAuthFlow
