var input = ["cat", [1, 2 ,3], "dog", 1, 4, {name: "john"}, ["pie", "cake"]]

 function sortTypes(arr){
    for (var i = 0; i < arr.length; i++){
        console.log (typeof arr[i]);
        if (typeof arr[i] === "string"){
            sortedObject.strings.push( arr[i] );
        }
        if (typeof arr[i] === "number"){
            sortedObject.numbers.push( arr[i] );
        }
        if ( arr[i] instanceof Array){
            sortedObject.arrays.push( arr[i] );
        }
        else if (typeof arr[i] === "object"){
            sortedObject.objects.push( arr[i] );
        }
    }
}

var sortedObject = {
    strings: [],
    arrays: [],
    objects: [],
    numbers: []
    
}

sortTypes(input);
console.log (sortedObject);