function splitArray(array, size){
  for(var i = 0; i < array.length; i++ ){
    return array.push(array.slice(0, size))
  }
}

var array =  []

splitArray(["a", "b", "c", "d"], 2) 

// should return [["a", "b"], ["c", "d"]]

//dan's solution

function chunArrayInGroups(array, length){
    var final = [];
    for (var x = 0; x < array.length; x+= length){
        var part = array.splice(x, length);
        if(part.length === length){
            final.push(part);
        }
        for (var y = 0; y < part.length; y++){
            array.unshift(part[y]);
        }
    }
    return final;
}

//mana's solution 

function chunkArrayInGroups(things, num){
    var splitArray = [], i;
    for (i = 0; i < things.length; i += num){
        splitArray.push(things.slice(i, i + num));
    }
    return splitArray;
}

//Tim's solution

function chunkArrayInGroups(things, num){
    for (var i = 0; i < things.length; i += num){
        var smallArray = things.slice(i, i + num);
    }
    return smallArray;
}

//steve's soultion

function chunkArrayInGroups(things, num){
    var output =[];
    while (things.length) output.push(things.splice(0, num));
    return output;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].