Array.prototype.myFilter = function (callback) {  
  var array = this;
  var arrayToReturn = [];
  
    for(var i = 0; i < array.length; i++){
        if(callback(array[i])){
            arrayToReturn.push(array[i]);
        }    
    }
    return arrayToReturn;
};

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var filteredArray = numericArray.myFilter(function (element) {  
  if (element > 5)
    return false;
  else
    return true;
});