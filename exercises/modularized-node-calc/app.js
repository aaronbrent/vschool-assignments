var readlineSync = require('readline-sync');
var add = require('./add');
var sub = require('./sub');
var mult = require('./mult');
var divide = require('./div');
var expon = require('./exp');

var firstNumber = readlineSync.question('Please enter the first number');
var secondNumber = readlineSync.question('Please enter the second number');
var operations = ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Exponentiation'],
 whichOperation = readlineSync.keyInSelect(operations, 'Which operation would you like to perform?');


if (whichOperation === 0){
    console.log("Result: " + add(firstNumber, secondNumber));
    
}
if (whichOperation === 1){
    console.log("Result: " + sub(firstNumber, secondNumber));
    
}

if (whichOperation === 2){
    console.log("Result: " + mult(firstNumber, secondNumber));
    
}
if (whichOperation === 3){
    console.log(divide.result + divide.div(firstNumber, secondNumber));
    
}
if (whichOperation === 4){
    console.log("Result: " + expon(firstNumber, secondNumber));
    
}


