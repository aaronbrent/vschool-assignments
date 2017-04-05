function withOutEnd(str) {
    var modStr = [];
    for (var i = 1; i < str.length - 1; i++) {
        modStr.push(str[i]);
    }
    console.log(modStr);
    return modStr;
}
withOutEnd("testing");

function withOutEnd2(str){
    var modStr = [];
    modStr = str.split("");
    modStr.splice(0,1);
    modStr.splice(modStr.length -1, modStr.length);
    modStr.join("");  
console.log(modStr);
    return modStr;
}

withOutEnd2("Second-test");