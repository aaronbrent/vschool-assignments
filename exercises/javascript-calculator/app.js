var readline = require("readline-sync");

var numberOne = readline.question('Please enter your first number')

var numberTwo = readline.question('Please enter your second number')

var operations = ['addition', 'multiplication', 'division', 'subtraction']
  
var operationQuestion = readline.keyInSelect(operations, 'Please enter the operation to perform:');

var operationReturn = operations[operationQuestion];

console.log(operationReturn);

if (operationReturn == 'addition'){ 
    console.log("The result is: " + (parseInt(numberOne) + parseInt(numberTwo)));
}

if (operationReturn == 'multiplication'){
    console.log("The result is: " + (parseInt(numberOne) * parseInt(numberTwo)));
}


if (operationReturn == 'division'){
    console.log("The result is: " + (parseInt(numberOne) / parseInt(numberTwo)));

}

if (operationReturn == 'subtraction'){
    console.log("The result is: " + (parseInt(numberOne) - parseInt(numberTwo)));
}









