var express = require("express");
var app = express();

var bodyParser = require('body-parser');
var bountyRouter = require("./bounty-route");
app.use(bodyParser.json());



app.use("/bounty", bountyRouter);

app.use(express.static('public'));



app.listen(3000, function () {
    console.log("App is listening on port 3000!");
});
