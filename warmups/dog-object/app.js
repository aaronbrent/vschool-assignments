var animals = [
  {
    type: "dog",
    name: "Howard"
  },
  {
    type: "cat",
    name: "Thomas"
  },
  {
    type: "dog",
    name: "Bear"
  },
  {
    type: "dog",
    name: "Indy"
  },
  {
    type: "cat",
    name: "Ryker"
  }
]

function findDog(arr){
    var dogArr = [];
    for(var i = 0; i < arr.length; i++){
        if (arr[i].type === "dog"){
            dogArr.push(arr[i]);
        }
    }
    return dogArr;
}

console.log(findDog(animals));