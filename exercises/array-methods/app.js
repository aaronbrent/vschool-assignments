var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);

console.log("vegetables: ", vegetables);

vegetables.pop();

fruit.splice(0, 1);

var orangeIndex = fruit.indexOf("orange");

fruit.push(orangeIndex);

console.log(vegetables.length);

vegetables.push(vegetables.length);

var food = fruit.concat(vegetables);

food.splice(4, 2);

food.reverse();

console.log(food.join());

