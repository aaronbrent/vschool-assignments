var app = angular.module('myApp', []);

app.controller('myCntrl', ['$scope', '$http', function($scope, $http) { 
//    $scope.test = "connected"
    $http.get('http://pokeapi.co/api/v2/pokemon')
        .then(function (response) {
        console.log(response.data.results)
            $scope.pokemon = response.data.results
        });
    

}]);