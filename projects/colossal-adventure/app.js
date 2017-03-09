var readline = require("readline-sync");
  
var walkQuestion = readline.keyIn('Press "w" to walk? ', {limit: 'w'});
var fightQuestion = readline.keyIn('You are being attacked!\nPress "f" to fight or "r" to run away!', {limit: 'fr'});
 


function getRandom(){
    return Math.random();
    }

if (walkQuestion === true){ 
    return walk();
}

if (fightQuestion === 'f'){
    console.log("fighting!");
//    return fight();
}else if (fightQuestion === 'r'){
    console.log ("running");
//    return run();
}

function walk(){
    if (getRandom() < 0.34){
        return fightQuestion;
    }else {
        return walkQuestion;
    }
}

function run(){
    console.log("You are running away!");}
//    if (getRandom() <= 0.50){
//        return 1;
//    }else {
//        return 2;
//    }
//}

function fight(){
    console.log("you are fighting!")
//    if (attackPower > enemyHP){
//        return "You win";
//    }else {
//        return attackOrRun();
//    }
}

function playerAttack(){
    var attackPower = Math.random() * (100 - 5) + 5;
    return attackPower;
}

function enemyAttack(){
    var enemyAttackPower = Math.random() * (70 - 5) + 5;
    return enemyAttackPower;
}

function attackOrRun(){
    if (run() === 1){
        console.log("You escaped!")
    }else {
        console.log("Enemy caught up and you must fight!")
    }
}




                       
//Console must greet player with a fun message
//Console must ask for the player's name and store it
//Walking: 
//The console will ask the user to enter a "w" to walk
//Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
//If a wild enemy appears: 
//The enemy is random (can be chosen out of a minimum of 3 different enemy names)
//The user can decide to attack or run
//If attacking, you will choose a random attack power between a min and max
//If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
//After the player attacks or runs the enemy attacks back for a random damage amount
//If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
//If the enemy kills the player the console prints an cool death message and the game ends
//Inventory 
//When the player kills enemies, they are awarded with items
//If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory                       


//enemy generator code below:

//function EnemyGenerator (type, hitPoints, defense){
//    this.type = type;
//    this.hitPoints = hitPoints;
//    this.defense = defense;
//}
//
//function typeGenerator (){
//    var typeRoll = Math.random();
//        if (typeRoll <= 0.33){
//            return type = "Ancient Dragon";
//        } else if (typeRoll >= 0.33 && typeRoll <= 0.66){
//        return type = "Prowler";
//        } else {
//            return type = "Mighty Grunt";
//        }
//}
//
//
//function hitPointGenerator(min, max) {
//    return Math.floor(Math.random() * (max - min) + min);
//}
//
//
//function typeHitPoint(type){
//    if (type === "Ancient Dragon"){
//        return hitPointGenerator(80, 100);
//    }else if (type === "Prowler"){
//        return hitPointGenerator(50, 79);
//    }else if (type === "Mighty Grunt"){ 
//        return hitPointGenerator (20, 49)
//    }
//}
//
////var randomType = typeGenerator();
////var randomHitPoints = typeHitPoint(randomType);
////var randomDefense = randomHitPoints * 3;
//
//
////console.log(enemy);
//
//var enemies = [];
//
//for (var i = 0; i <= 100; i++){
//    
//    var randomType = typeGenerator();
//    var randomHitPoints = typeHitPoint(randomType);
//    var randomDefense = randomHitPoints * 3;
//    
//    var enemy = new EnemyGenerator(randomType, randomHitPoints, randomDefense);
//
//    enemies.push(enemy);
//    
//}
//
//console.log(enemies);