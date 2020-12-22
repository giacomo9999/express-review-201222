const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

MongoClient.connect("mongo-connection-string", (err, client) => {});

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Listening on 3000");
});

app.get("/", (req, res) => {
  console.log("GET Request received for page...", __dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
  console.log("POST request received...", req.body);
});
