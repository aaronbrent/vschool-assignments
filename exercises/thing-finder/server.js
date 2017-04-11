var express = require("express");
var app = express();

var veggies = [
    {
        'type': 'carrot',
        'color': 'orange',
        'price': 0.5
    },
    {
        'type': 'bell pepper',
        'color': 'red',
        'price': 1.25
    },
    {
        'type': 'celery',
        'color': 'green',
        'price': 0.75
    },
    {
        'type': 'lettuce',
        'color': 'green',
        'price': 1.5
    },
]

app.get('/veggies', function(req, res){
    console.log(req.query);
    var foundItems = [];
    
    for (var i = 0; i < veggies.length; i++){
        
        var haveFoundExactMatch = true;
        
        for (var key in req.query){
           if (req.query[key] != veggies[i][key]){
               haveFoundExactMatch = false;
           } 
        }
        if (haveFoundExactMatch){
            foundItems.push(veggies[i]);
        }
    }
    
    res.send(foundItems);
    
})



app.listen(8000, function () {
    console.log("App is listening on port 8000!");
});