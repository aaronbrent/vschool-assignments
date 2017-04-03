var app = angular.module("myApp", []);

app.controller("mainCtrl", function($scope, Cartoons){
    $scope.test = "its connected";
    
    $scope.theList = Cartoons.cartoonList;
    
    $scope.addToon = function (toon){
        Cartoons.addCartoon(toon);
        
        $scope.toon = {};
    }
    
    
//    console.log(cartoonList);
});