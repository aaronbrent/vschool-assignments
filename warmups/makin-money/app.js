
function formatMoney(num){
    strNum = num.toString();
    var numArray = [];
    for (var i = 0; i < strNum.length; i++){
        numArray.push(strNum[i]);
    }
    numArray.splice(numArray.length-2, 0, ".");
    if (numArray.length > 5) {
        numArray.splice(numArray.length-6,0,",");
    }
    if (numArray.length > 10 ){
        numArray.splice(numArray.length-10,0,",");
    }
    numArray.unshift("$");
    var output = numArray.join('');
    console.log (output);
}

formatMoney(5678905);


