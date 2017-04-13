var express = require("express");
var issueRoute = express.Router();
var Issue = require("../models/issue-schema");

issueRoute

.get("/", function (req, res) {
    Issue.find(req.query, function (err, friendsArray) {
        res.send(friendsArray);
    })
})

.post("/", function (req, res) {
    newIssue = new Issue(req.body);
    newIssue.save(function (err, savedIssue) {
        res.send(savedIssue);
    });
})

.delete("/:id", function(req, res){
    Issue.findByIdAndRemove(req.params.id, function(err, deletedIssue){
       res.send(deletedIssue)
    })
})

.put("/:id", function(req, res){
    Issue.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, editedIssue){
        res.send(editedIssue); 
    })
})

module.exports = issueRoute