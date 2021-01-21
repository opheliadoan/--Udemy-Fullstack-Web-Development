const express = require("express");
const app = express();

// a route handler
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// default (development environment) is 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
