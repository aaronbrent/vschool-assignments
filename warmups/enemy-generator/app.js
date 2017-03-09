function EnemyGenerator (type, hitPoints, defense){
    this.type = type;
    this.hitPoints = hitPoints;
    this.defense = defense;
}

function typeGenerator (){
    var typeRoll = Math.random();
        if (typeRoll <= 0.33){
            return type = "Ancient Dragon";
        } else if (typeRoll >= 0.33 && typeRoll <= 0.66){
        return type = "Prowler";
        } else {
            return type = "Mighty Grunt";
        }
}


function hitPointGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function typeHitPoint(type){
    if (type === "Ancient Dragon"){
        return hitPointGenerator(80, 100);
    }else if (type === "Prowler"){
        return hitPointGenerator(50, 79);
    }else if (type === "Mighty Grunt"){ 
        return hitPointGenerator (20, 49)
    }
}

//var randomType = typeGenerator();
//var randomHitPoints = typeHitPoint(randomType);
//var randomDefense = randomHitPoints * 3;


//console.log(enemy);

var enemies = [];

for (var i = 0; i <= 100; i++){
    
    var randomType = typeGenerator();
    var randomHitPoints = typeHitPoint(randomType);
    var randomDefense = randomHitPoints * 3;
    
    var enemy = new EnemyGenerator(randomType, randomHitPoints, randomDefense);

    enemies.push(enemy);
    
}

console.log(enemies);










