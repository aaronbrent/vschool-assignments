//function 1
//
//function printThisWord(word){
//    for(var i = 0; i < word.length; i++){
//        console.log (word[i]);
//    }
//}
//
//printThisWord("super");
//
////function 2
//
//function whereIsThisCharacter(stringA, character){
//    for (var i = 0; i < stringA.length; i++){
//        if (stringA[i] === character){
//            return i;
//        };
//        }
//    return "Character " + character + " is not found";
//    
//}
//
//console.log(whereIsThisCharacter("Hello", "e"));
//console.log (whereIsThisCharacter("Hello", "o"));

//function 3

var numArray = [12, 11, 4, 42];

function findingFourtyTwo(numArray){
    for (var i = 0; i < numArray.length; i++){
        if (numArray[i] === 42){
            return;
        }
     }
    console.log ("42 is not found!");
}

console.log (findingFourtyTwo(numArray));

//function 4

//
//
//function printTheSmallest(numberArray){
//    var lowestValue = numberArray[0];
//    for (var i = 0; i < numberArray.length; i++){
//        if (numberArray[i] < lowestValue) {
//            lowestValue = numberArray[i];
//        }
//    }
//    return lowestValue;
//}
//
//var numberArray = [34, 56, 26, 12, 9, 12, 63, 59, 74, 199];
//
//console.log(printTheSmallest(numberArray));