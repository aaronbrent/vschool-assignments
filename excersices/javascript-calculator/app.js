var readline = require("readline-sync");

var num1 = readline.question('Please enter your first number')

var num2 = readline.question('Please enter your second number')

var operations = ['addition', 'multiplication', 'division', 'subtraction']
  
var operationQuestion = readline.keyInSelect(operations, 'Please enter the operation to perform:');

var operationReturn = operations[operationQuestion];

console.log(operationReturn);

if (operationReturn == 'addition'){ 
    console.log("The result is: " + parseInt(numberOne) + parseInt(numberTwo));
}

if (operationReturn == 'multiplication'){
    console.log("The result is: " + parseInt(numberOne) * parseInt(numberTwo));
}


if (operationReturn == 'division'){
    console.log("The result is: " + parseInt(numberOne) / parseInt(numberTwo));

}

if (operationReturn == 'subtraction'){
    console.log("The result is: " + parseInt(numberOne) - parseInt(numberTwo));
}

//Tims working code:

//var readlineSync = require("readline-sync");
//
//var operations = ["Addition", "Multiplication", "Division", "Subtraction"]
//
//var num1 = readlineSync.question("Please enter your first number.");
//var num2 = readlineSync.question("Please enter your second number.");
//var operationIndex = readlineSync.keyInSelect(operations, "Please enter the operation you wish to perform.");
//var operation = operations[operationIndex];
//
//
//
//if (operation == "Addition") {
//    console.log(parseInt(num1) + parseInt(num2));
//} else if (operation == "Multiplication"){
//    console.log(parseInt(num1) * parseInt(num2));
//} else if (operation == "Division"){
//    console.log(parseInt(num1) % parseInt(num2));
//} else if (operation == "Subtraction"){
//    console.log(parseInt(num1) - parseInt(num2));
//}








