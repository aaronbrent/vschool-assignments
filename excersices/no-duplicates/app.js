var input = 'bookkeeper larry';
var noDuplicate = [];
var misfitArray = [];

for (var i = 0; i < input.length; i++){
    
    if(noDuplicate.indexOf(input[i]) === -1) {
        noDuplicate.push(input[i]);
    } else {
       
        misfitArray.puch(input[i]);
    }
}



//function findUniqueCharacters(string) {
//  var unique = '';
//  for (var i = 0; i < string.length; i++) {
//    if (string.lastIndexOf(string[i]) == string.indexOf(string[i])) {
//      unique += string[i];
//    } 
//  }
//  return unique;
//}
//
//console.log(findUniqueCharacters('bookkeeper larry'));
//console.log(findUniqueCharacters('anaconda'));