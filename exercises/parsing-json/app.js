$("#get-data").click(function(){

 $.get("http://api.vschool.io:6543/pokemon.json", function(pokeData){
         parsePoke(pokeData);
         
    })
 
});

var pokeData;
var pokeArray = [];

function parsePoke(pokeData){
    for(var i = 0; i < pokeData.objects[0].pokemon.length; i++){
        pokeArray.push(pokeData.objects[0].pokemon[i]); 
        
        var para = document.createElement("li");
        var node = document.createTextNode(pokeArray[i].name);
        para.appendChild(node);

        var element = document.getElementById("data");
        element.appendChild(para);
    }
        
    console.log (pokeArray[0].name);
}   



