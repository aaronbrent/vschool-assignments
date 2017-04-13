var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var issueRoute = require("./routes/issue-route")
var mongoose = require('mongoose');
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/rock-vote', function(err) {
    if (err) throw err;
    console.log("Connected to DB");
}); 

app.use("/issue", issueRoute)


app.listen(8000, function(){
    console.log("server running on 8000");
});