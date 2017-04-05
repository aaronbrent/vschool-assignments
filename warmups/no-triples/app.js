// Given an array of ints, we'll say that a triple is a value appearing
// 3 times in a row in the array. Return true if the array does not contain
// any triples.

function noTriples(nums) { 
	for(var i = 0; i < nums.length; i++){
      if (nums[i] === nums[i+1] && nums[i+1]=== nums[i+2]) {
      return false;
      } 
    }
   return true;
}

var nums = [3, 4, 4, 5, 6, 7, 8, 8, 8, 2]

console.log(noTriples());