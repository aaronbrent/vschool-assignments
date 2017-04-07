//function that accepts two numbers as parameters, and returns the sum

function sumOfTwo(numberOne, numberTwo){
    
    var total = numberOne + numberTwo;
    return total;
    
}

sumOfTwo(30, 15);

//function that accepts three numbers as parameters, and returns the largest of those numbers.

function largestOfThree (numberOne, numberTwo, numberThree){

        if ((numberOne > numberTwo) && (numberOne > numberThree)){
            return numberOne;
        }else if ((numberTwo > numberOne) && (numberTwo> numberThree)){
            return numberTwo;
        }else if ((numberThree > numberOne) && (numberThree > numberTwo)){
            return numberThree;
        }
}

largestOfThree(65, 16, 5);

//function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd")

function isNumberOdd(checkNumber){
    
    if (checkNumber % 2 === 0){
        return "even";
    }else {
        return "odd";
    }
}

console.log(isNumberOdd(3));
console.log(isNumberOdd(4));

//- Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function isStringTwentyChar(checkString){
    
    for (var i = 0; i < checkString.length; i++){
        if (checkString.length <= 20){
            return checkString.slice(0, checkString.length / 2);   
        }else {
             return checkString + checkString;
        }
    }
}

console.log (isStringTwentyChar("thisisshort"));
console.log (isStringTwentyChar("thisisasuperlongstringtocounandtestfortwentrycharacters"));






