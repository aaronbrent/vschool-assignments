var readline = require("readline-sync");
var playQuestion = readline.keyIn('Welcome to the Colossal Adventure! Press "p" to play! ', {
    limit: 'p'
});

var player = {
        defense: 85, 
        attack: Math.round(Math.random() * (55 - 10) + 10), 
        items: ["Sword"]
    }

function enemySelector() {
    var dragon = {
        name: "Dragon"
        , attack: Math.round(Math.random() * (55- 25) + 25)
        , defense: 100
        , bonusHealth: 40
        , item: "Master Sword"
    };
    var orc = {
        name: "Orc"
        , attack: Math.round(Math.random() * (35- 15) + 15)
        , defense: 50
        , bonusHealth: 30
        , item: "Ruby"
    };
    var bandit = {
        name: "Bandit"
        , attack: Math.round(Math.random() * (15- 5) + 5)
        , defense: 30
        , bonusHealth: 20
        , item: "Gold Ring"
    , };
    var diceRoll = Math.random();
    if (diceRoll <= 0.34) {
        return dragon;
    }
    else if (diceRoll > 0.34 && diceRoll <= 0.66) {
       return orc;
    }
    else {
        return bandit;
    }
}

//while(player.defense > 0){
//    walk();
//}

if (playQuestion === 'p') {
     walk();
}


function walk() {
    
    var walkQuestion = readline.keyIn('Press "w" to walk. ', {
        limit: 'w'
    });
    if (Math.random() < 0.34) {
        getAttacked();
    }
    else {
        walk();
    }
}


function getAttacked() {
    
    var fightQuestion = readline.keyIn('You are being attacked!\nPress "f" to fight or "r" to run away!', { limit: 'fr' });
    
    if (fightQuestion === 'f') {
       fight();
    }
    else if (fightQuestion === 'r') {
        run();
    }
}

function fight() {
    
    var newEnemy = enemySelector();
    
    while(newEnemy.defense > 0){
        playerAttack()
    }
    var attackQuestion = readline.keyIn('Press "a" to attack the ' + newEnemy.name + '!', { limit: 'a' });
    
     if (attackQuestion === 'a') {
         playerAttack();
    }
    
    


function continueFight(){
        var attackAgain = readline.keyIn('Press "a" to counter attack ' + newEnemy.name + '!', { limit: 'a' });
        return playerAttack();
    }
    
    if (attackQuestion === 'a') {
        return playerAttack();
    }
    
    function monsterAttack(){
            player.defense = (player.defense - newEnemy.attack);
             if (player.defense > 0){
                 console.log("The enemy lands a blow... you take " + ( newEnemy.attack ) + " points of damage");
                console.log("You have " + (player.defense) + " points left.")
             return continueFight();
             } else console.log ("The enemy lands a blow... you take " + ( newEnemy.attack ) + " points of and DIED!");
               death();
          }
    
    function playerAttack() {
        
        newEnemy.defense = (newEnemy.defense - player.attack);
        
            if ((player.items.indexOf("Sword") > -1) && (player.items.indexOf("Master Sword") > -1) &&       (player.items.indexOf("Gold Ring") > -1) && (player.items.indexOf("Ruby") > -1) ){
                  console.log ("You obtained all of the items! You win!");
                  win();
            } else if ((newEnemy.defense) > 0) {
                console.log("You took " + player.attack + " points from the " + newEnemy.name + "!");
                console.log(newEnemy.name + " has " + (newEnemy.defense) + " defense points left.")
            return monsterAttack();
            }  else {
                player.items.push(newEnemy.item);
                player.defense += newEnemy.bonusHealth;
                console.log("You killed the enemy and took a " + newEnemy.item + " and " + newEnemy.bonusHealth + " health points were added to your defense");
                console.log ("You currently have these items: " + (player.items));
                return walk();
        }
    }
}

function run(){
    
    if (Math.random() <= 0.50){
        console.log ("You Escaped!");
        return walk(); }else {
        console.log ("The enemy cuaght up!") 
        return fight();
        }
}  

function death(){
    return playQuestion;
}

function win(){
    return playQuestion;
}

