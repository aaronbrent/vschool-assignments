var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  

var newArray = [];

for (var i = 0; i < people.length; i++){
    newArray.push(people[i] + ": ")
    for (var i = 0; i < alphabet.length; i++){
        newArray.push(alphabet[i].toUpperCase());
    }
}

console.log(newArray);