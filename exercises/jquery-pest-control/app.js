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

var audio = $("#coinSound")[0];
    
  $("#submit").click(function() {
      audio.play();
});

$("#nightMode").click(function() {
    $("#nightMode").css("visibility", "hidden");
    $("#dayMode").css("visibility", "visible");
    $('.container').css("background-image", "url(http://i.ytimg.com/vi/_Ho3nnuZ6nM/maxresdefault.jpg)");
    
});

$("#dayMode").click(function() {
     $("#dayMode").css("visibility", "hidden");
    $("#nightMode").css("visibility", "visible");
    $('.container').css("background-image", "url(http://pre15.deviantart.net/884f/th/pre/i/2006/133/9/7/idyllic_mario_by_blendmaster.png)");
    
});