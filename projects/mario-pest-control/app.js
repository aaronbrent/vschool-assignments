//var goomba = document.getElementById("Goombas").value;
//var bobomb = document.getElementById("Bob-omb");
//var cheepcheep = document.getElementById("Cheep-cheep");

//Baddies pricing

var GoombaCoins = 5;
var BobombCoins = 7;
var cheepcheepCoins = 11;

var totalCoins = 0;

//Baddies caught

function baddiesCaught (){
    
    var goomba = document.getElementById("goombas").value;
    var bobomb = document.getElementById("bob-omb").value;
    var cheepcheep = document.getElementById("cheep-cheep").value;
    
    totalCoins = (goomba * GoombaCoins) + (bobomb * BobombCoins) + (cheepcheep * cheepcheepCoins);
    
    document.getElementById("output").textContent = totalCoins;
}

document.getElementById("submit").addEventListener("click",baddiesCaught);