function EnemyConstructor(name, population){
    this.name = name;
    this.population = population;
}

var penguins = new EnemyConstructor("Penguins", 1000000);
var communists = new EnemyConstructor("Communists", 1000000);

var firstAttacked = coinFlip();
var party;

function coinFlip(coinLand){
    var flip = Math.random();
    if (flip >= 0.5){
        coinLand = "Heads";
    }else {
        coinLand = "Tails";
    }
    return coinLand;
}

if(firstAttacked === "Heads"){
        party = communists;
    }else {
        party = penguins;
    }
    
  console.log(party);

function sendNuke(party, onHit, onMiss){
    var hitChance = Math.random();
    if (hitChance >= 0.33){
        return onHit(party);
    }else{
       return onMiss(party);
    }
}

function onHit(party){
    var killedPopulation = Math.floor(Math.random() * (300000 - 40000) + 40000);
    party.population -= killedPopulation;
    if(party.population > 0){
        console.log("The nuke hit " + party.name + "! There are now only " + party.population + " " + party.name + " remaining.");
        return counterAttack(opposingParty,party, penguins, communists, counterHit, counterMiss);
    }else {
        return console.log(party.name + "'s population is " + party.population + " Game Over");
    }
}


function onMiss(party){
    console.log("The nuke missed " + party.name + " and landed in the ocean");
    return counterAttack(opposingParty,party, penguins, communists, counterHit, counterMiss);
}

var opposingParty;

function counterAttack(opposingParty,party, penguins, communists, counterHit, counterMiss){
    if (party === penguins){
        opposingParty = communists;
    } else {
        opposingParty = penguins;
    }
    var hitChance = Math.random();
    if (hitChance >= 0.33){
        return counterHit(opposingParty);
    }else{
        return counterMiss(opposingParty);
        }
}

function counterHit(opposingParty){
    var killedPopulation = Math.floor(Math.random() * (300000 - 40000) + 40000);
    opposingParty.population -= killedPopulation;
    if (opposingParty.population > 0){
        console.log("The nuke hit " + opposingParty.name + "! There are now only " + opposingParty.population + " " + opposingParty.name + " remaining.");
        return sendNuke(party, onHit, onMiss);
    }else {
        return console.log(opposingParty.name + "'s population is " + opposingParty.population + " Game Over");
    }
}

function counterMiss(opposingParty){
    console.log("The nuke missed " + opposingParty.name + " and landed in the ocean");
    return sendNuke(party, onHit, onMiss);
}

sendNuke(party, onHit, onMiss);
