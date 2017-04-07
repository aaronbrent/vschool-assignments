function addNumbers (){
    var numberOne =
    document.getElementById("add-one");
    var numberTwo = 
    document.getElementById("add-two");
    var addTotal = Number(numberOne.value) + Number(numberTwo.value);
    console.log (addTotal);
    
    var totalText = document.createElement("span");
    
    var newNode = document.createTextNode(addTotal);
        totalText.appendChild(newNode);
    
    var addResult = document.getElementById("add-row");
        addResult.appendChild(totalText);
}

function subtractNumbers (){
    var numberOne =
    document.getElementById("subtract-one");
    var numberTwo = 
    document.getElementById("subtract-two");
    var subtractTotal = Number(numberOne.value) - Number(numberTwo.value);
    console.log (subtractTotal);
    
    var totalText = document.createElement("span");
    
    var newNode = document.createTextNode(subtractTotal);
        totalText.appendChild(newNode);
    
    var subResult = document.getElementById("sub-row");
        subResult.appendChild(totalText);
}

function multiplyNumbers (){
    var numberOne =
    document.getElementById("multiply-one");
    var numberTwo = 
    document.getElementById("multiply-two");
    var multTotal = Number(numberOne.value) * Number(numberTwo.value);
    console.log (multTotal);
    
    var totalText = document.createElement("span");
    
    var newNode = document.createTextNode(multTotal);
        totalText.appendChild(newNode);
    
    var multResult = document.getElementById("mult-row");
        multResult.appendChild(totalText);
}