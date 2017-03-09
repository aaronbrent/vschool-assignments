var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
var newArray = [];

//function arrayScan (inputOne, inputTwo){
//    
//    for (var i = 0; i < inputOne.length; i++){
//        if (inputOne[i < 1]){ 
//            newArray.push(inputOne[i] + ":");
//        }  
//    
//    for (var i = 0; i < inputTwo.length; i++){
//            newArray.push(inputTwo[i]);
//        }
//    }
//}
//
//console.log(arrayScan(people, alphabet));

var newArray = [];

for (var i = 0; i < people.length; i++){
    newArray.push(people[i] + ": ")
    for (var i = 0; i < alphabet.length; i++){
        newArray.push(alphabet[i].toUpperCase());
    }
}

console.log(newArray);