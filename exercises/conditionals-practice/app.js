var leastValue = function (numberOne, numberTwo){
    if (numberOne < numberTwo) {
        console.log (numberOne);
    } else if (numberTwo < numberOne) {
        console.log (numberTwo);
    }
}

leastValue (3,4);
leastValue (345555, 856);

function monkeyTrouble (aSmile, bSmile){
    if (aSmile === bSmile) {
        return true;
     }  else {
         return false;
     }
}

console.log (monkeyTrouble(true, true));
console.log (monkeyTrouble(false, false));
console.log (monkeyTrouble(true, false));

function timeOfDay (time){
    if (time > 5 && time < 12){
        console.log ("Good morning!");
    } else if (time > 12 && time < 18){
        console.log ("Good afternoon!");
    } else if (time > 18 && time < 5) {
        console.log ("Good Evening!")
    }
}

var d = new Date();
var time = d.getHours();
console.log (timeOfDay(time));