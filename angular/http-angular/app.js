var app = angular.module('myApp', []);

app.controller('myCntrl', ['$scope', '$http', function($scope, $http) { 

    $http.get('http://pokeapi.co/api/v1/pokemon/1')
        .then(function (response) {
            console.log(response.data);
        });
    
     var todo = {
         title: 'buy mint',
         description: 'to make lime mint tea',
         completed: false
     }
     
    $http.post('http://api.vschool.io/aaronellis/todo/', todo)
        .then(function (response) {
           console.log(response.data)
        });
}]);