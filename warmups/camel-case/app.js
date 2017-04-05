function camelCase(string){
    for(var i = 0; i < string.length; i++){
        var char = string.charAt(i);
        if (string.indexOf(char) === " " || string.indexOf(char) === "-" || string.indexOf(char) === "_"){
            var newString = string.slice(string[i]);
        }
    }
    return newString;
}

console.log(camelCase("test_string"));


    
