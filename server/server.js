var express = require("express"),
  app = express(),
  http = require(),
  server = http.createServer(app),
  // bodyParser = require("body-parser"),
  methodOverride = require("method-override");
// eslint-disable-next-line no-undef
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ingredients");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());

var router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use(router);

mongoose.connect("mongodb://localhost/ingredients", function (err, res) {
  if (err) {
    console.log("ERROR: connecting to Database. " + err);
  }
  app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
  });
});
