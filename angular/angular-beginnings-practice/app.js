var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope){
    
 $scope.todos = [
    {
        name: "Bread",
        price: "$2.00"
    },
    {
        name: "Milk",
        price: "$2.99"
    },
    {
        name: "Protein",
        price: "$14.50"
    }
]  
   
}]);

