const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("In comes a request to ", req.url);
  //res.end("Request Received");
  next()
});

app.get("/", (req, res) => res.send("home page"));

app.get("/about", (req, res) => res.send("about page"));

app.listen(3000);
console.log("server on port", 3000);
