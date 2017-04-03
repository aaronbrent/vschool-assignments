var app = angular.module("hitList", []);

app.controller("mainCtrl", ["$scope", "listCall", function($scope, listCall){
   
    listCall.getList().then(function(theList){
      $scope.theList = theList;  
    });
    
}]);