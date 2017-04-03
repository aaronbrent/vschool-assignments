var app = angular.module("myApp", []);

app.service('pokeService', function(){
    
    this.favePoke = [];
    var self = this;
    
    this.addPokemon = function (name){
        
        self.favePoke.push(name)
        console.log(self.favePoke);
        return self.favePoke;
        
    }
    this.removePokemon = function (name){
        for (var i = 0; i < self.favePoke.length; i++){
            if (name === self.favePoke[i]){
                self.favePoke.splice([i], 1);
            }
        }
    }
        
    
    
});

app.controller("mainCtrl", function($scope, pokeService){
    $scope.test = "its connected";
    
    $scope.favePoke = pokeService.favePoke;
    
    $scope.addPokemon = function (name){
       pokeService.addPokemon(name);
        
    }
    
    $scope.removePokemon = function(name){
        pokeService.removePokemon(name);
    }
        
    });