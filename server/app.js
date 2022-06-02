const express = require("express");
const app = express();
const path = require("path");
module.exports = app;

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
