function isPalindrome(str){
    var remove = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(remove,'');
    console.log (str);
    var reversedStr = str.split("").reverse().join("");
    console.log (reversedStr);
    if(str === reversedStr){
        console.log (true);
    }else{
        console.log (false);
    }
}




//isPalindrome("Star Rats!");  // true  
//isPalindrome("palindrome");  // false  
isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");