var express = require("express");
var uuid = require('uuid/v4');
var bountyRouter = express.Router();



var bounties = [];
var bountiesExample = [
    {
    "firstName": "Luke",
    "lastName": "Skywalker",
    "living": true,
    "bounty": 9000,
    "type": "jedi",
    "_id": "5c332ddc-46a8-44d0-a022-8ddebed2c8d9"
  },
  {
    "firstName": "darth",
    "lastName": "vader",
    "living": true,
    "bounty": 3000,
    "type": "sith",
    "_id": "82e2c810-bfb2-48bc-8607-6d3e04c05570"
  },
  {
    "firstName": "yoda",
    "lastName": "boda",
    "living": false,
    "bounty": 7000,
    "type": "jedi",
    "_id": "fd146a69-29c7-4153-b939-3c54365df626"
  }
   
];

bountyRouter.route("/")
    .get(function (req, res) {
    res.send(bounties);
})
    .post(function (req, res) {
    var newBounty = req.body;
    newBounty._id = uuid();
    bounties.push(newBounty);
    res.send(newBounty);
});

bountyRouter.route("/:_id")
    .delete(function (req, res) {

    var delId = req.params._id;

    for (var i = 0; i < bounties.length; i++) {
        if (delId === bounties[i]._id) {

            res.send(bounties.splice(i, 1));
        }
    }
})
    .put(function(req, res){
    var editBounty = req.body;
    
    var id = req.params._id;
    
    for (var i = 0; i < bounties.length; i++) {
            if (id === bounties[i]._id) {
                for (var key in req.body) {
                    if (bounties[i][key] != req.body[key]) {
                        bounties[i][key] = req.body[key];
                    }    
                }
            }
        }
    return res.send(editBounty);
  
});

module.exports = bountyRouter;