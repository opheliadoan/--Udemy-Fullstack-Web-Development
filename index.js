const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

// default (development environment) is 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=804899986451-vq9gmmval9kceoq91o65t276k21nfqfd.apps.googleusercontent.com&flowName=GeneralOAuthFlow
