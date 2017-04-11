var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/coffee');
var Schema = mongoose.Schema;


var coffeeSchema = new Schema({  
    
    name: String,
    
    species: String,
    region: String,
    description: String
    
});
var Bean = mongoose.model('Bean', coffeeSchema);

var kona = new Bean({
    name: "Kona",
    species: "Arabica",
    region: "Hawaii",
    description: "Grown on the slopes of Hualalai and Mauna Loa in the Kona District on the Big Island of Hawaii. Coffee was first introduced to the Islands by Chief Boki, the Governor of Oahu, in 1825."
});

kona.save(function(err, newBean){
    console.log(newBean);
});

