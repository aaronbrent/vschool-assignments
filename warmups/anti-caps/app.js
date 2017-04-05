//function antiCaps(str) {
//   
//   var output = "";
//   for (var i = 0; i < str.length; i++) {
//       if (str[i] == str[i].toUpperCase()) {
//           output += str[i].toLowerCase();
//       } else {
//           output += str[i].toUpperCase();
//       }
//   }
//   return output;
//}

function isCaps(string) {
            var flipString = '';
            var originalString = string;
            for (i = 0; i < originalString.length; i++) {
                if (originalString.charCodeAt(i) >= 65 && originalString.charCodeAt(i) <= 90) {
                    flipString = flipString + originalString.charAt(i).toLowerCase();
                }
                else
                    flipString = flipString + originalString.charAt(i).toUpperCase();
            }
            return(flipString);
}
    
console.log(isCaps("Super Duper String Flipping Function!"));
    
console.log(antiCaps('Hello')); // hELLO  
console.log(antiCaps('racEcar')); // RACeCAR  
console.log(antiCaps('bAnAnA')); // BaNaNa  





