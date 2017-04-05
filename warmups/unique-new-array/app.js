var result= [];

function findUniques(){
    var numbers = [];
    
        for (var i = 0; i < arguments.length; i++) {
            numbers.push(arguments[i]);

        }
        
        numbers = numbers.join().split(',');
        
	console.log(numbers);
    
    for (var i = 0; i < numbers.length; i++){
        numbers[i] = parseInt(numbers[i]);
    }
    
    numbers.sort(function(a, b){
        return a - b;
    });
    console.log(numbers);
    
    for (var i = 0; i < numbers.length; i++){
        if(numbers[i] != numbers[i + 1] && numbers[i] != numbers[i - 1]){
            result.push(numbers[i]);    
        }
    }
    return result;
}

console.log(findUniques([1, 2, 5, 6], [1, 2, 3, 8, 9, 10],[6, 3, 2]));  // [5, 8, 9, 10]

console.log(result)


