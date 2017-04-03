var app = angular.module("myApp", []); 

app.controller("myCntrl", ["$scope", function($scope) {  
 
    $scope.people = [];
    
    $scope.submitInfo = function(info) {
//        $scope.formatPhone = "";
//        for(var i = 0; i < info.phone.length; i++){
//            $scope.formatPhone = info.phone.splice()
//        }

        $scope.people.push(info);
        $scope.newPerson = {};

    }
         

}]);