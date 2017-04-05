var player = 
{
    name: "Mario",
    totalCoins: 0,
    status: "Small",
    star: false,
    setName: function(namePicked){
        this.name = namePicked;
    },
    
    gotHit: function(){
            if(this.status === "Powered Up"){
                this.status = "Big";
            }else if (this.status === "Big"){
                this.status = "Small";
            }else if (this.status === "Small"){
                this.status = "Dead";
                this.gameActive = false;
                console.log ("You died!")
            }
           
    },
    
    gotPowerUp:function(){
        if(this.status === "Small"){
            this.status = "Big";
        }else if(this.status === "Big"){
            this.status = "Powered Up";
        }
    },
    
    gameActive: true,
    addCoin:function(){
        return this.totalCoins++;
    },
    
    print: function(){
        console.log("Name: " + this.name + "\nCoins: " + this.totalCoins + "\nStatus: " + this.status + "\nActive Star: " + this.star)
    }
}

function randomRange(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
   
}

function action(whichAction){
    var random = randomRange(0,2);
    console.log (random);
    if (random === 0){
        console.log ("You got Hit!");
        return player.gotHit();
    }else if(random === 1){
        console.log ("You got a Power Up!");
        return player.gotPowerUp();
    }else if(random === 2){
        console.log ("You got a coin!");
        return player.addCoin();
    }
}

player.print();

for (var i = 0; i < 3; i++){
    action();
    player.print();
    
}