const http = require("http");
const express = require("express");
const pug = require("pug");

const app = express();
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;

app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.render("gymsite.html", params);
});
// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index2.html"));
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
