var app = angular.module("myApp", []);

app.controller("mainController", ["$scope", function ($scope) {  

    $scope.posts = [];
    
    $scope.submitBtn = function (inputs){
    
    $scope.posts.push(inputs);
    $scope.newPost = {};
}

}]);