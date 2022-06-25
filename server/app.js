const express = require("express");
const app = express();
const path = require("path");
module.exports = app;

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
