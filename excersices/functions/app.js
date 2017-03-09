function sumOfTwo(numberOne, numberTwo){
    
    var total = numberOne + numberTwo;
    return total;
    
}

console.log(sumOfTwo(30, 15));

function largestOfThree (numberOne, numberTwo, numberThree){

        if ((numberOne > numberTwo) && (numberOne > numberThree)){
            return numberOne;
        }else if ((numberTwo > numberOne) && (numberTwo> numberThree)){
            return numberTwo;
        }else if ((numberThree > numberOne) && (numberThree > numberTwo)){
            return numberThree;
        }
}

console.log(largestOfThree(65, 16, 5));

function isNumberOdd (checkNumber){
    
    if (checkNumber % 2 === 0){
        return "even";
    }else {
        return "odd";
    }
}

console.log(isNumberOdd(3));
console.log(isNumberOdd(4));

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


function fibonacciNumbers (n){
     var fibo = n * 1.61803;
     return fibo;
}

console.log(fibonacciNumbers(3));

function quadraticEquation (a, b, c){
    var x = 0;
    x = (-b)
    
}

function calculate()
    {
     var a=prompt("enter value of a");
     var b=prompt("enter value of b");
     var c=prompt("enter value of c");
     var a2=2*a;
     var ac=4*a*c;
     var dis=b*b;
     var dis=dis-ac;
     if(dis<0){
        document.getElementById('Equation').innerHTML='No real roots exist since Discriminant < 0 !<br />D = ' + dis + ' <br />The Equation = ' + a + 'x&#178; + ' + b + 'x + ' + c + '<br />';
        document.getElementById('x1').innerHTML='&nbsp; ';
        document.getElementById('x2').innerHTML='&nbsp; ';
        }
     else{
        var dis_sqrt=Math.sqrt(dis);
        var x1=-b+dis_sqrt;
        var x1=x1/a2;
        var x2=-b-dis_sqrt;
        var x2=x2/a2;
        document.getElementById('Equation').innerHTML=" Equation = " + a + "x&#178; + " + b + "x + " + c + "<br />";
        document.getElementById('x1').innerHTML=' Alpha (x1) = ' + x1;
        document.getElementById('x2').innerHTML=' Beta (x2) = ' + x2;
        }
    }


