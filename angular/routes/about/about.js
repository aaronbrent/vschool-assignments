var app = angular.module("routing-practice")

app.controller("AboutController", ["$scope", function($scope){
	$scope.test = "this is the about page!!"
}])