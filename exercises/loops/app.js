//function 1 prints each letter of a string individually

function printThisWord(word){
    for(var i = 0; i < word.length; i++){
        console.log (word[i]);
    }
}

printThisWord("super");

//function 2 checks a string for the position of a given character

function whereIsThisCharacter(stringA, character){
    for (var i = 0; i < stringA.length; i++){
        if (stringA[i] === character){
            return i;
        }
    }
    return "Character " + character + " is not found";
}

console.log(whereIsThisCharacter("Hello", "e"));
console.log (whereIsThisCharacter("Hello", "o"));

//function 3 checks an array looking for the number 42

var numArray = [12, 11, 4, 42];

function findingFourtyTwo(numArray){
    for (var i = 0; i < numArray.length; i++){
        if (numArray[i] === 42){
            return i;
        }
     }
    console.log ("42 is not found!");
}

console.log (findingFourtyTwo(numArray));

//function 4 returns the lowest value integer from an array



function printTheSmallest(numberArray){
    var lowestValue = numberArray[0];
    for (var i = 0; i < numberArray.length; i++){
        if (numberArray[i] < lowestValue) {
            lowestValue = numberArray[i];
        }
    }
    return lowestValue;
}

var numberArray = [34, 56, 26, 12, 9, 12, 63, 59, 74, 199];

console.log(printTheSmallest(numberArray));