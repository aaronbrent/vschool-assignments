var app = angular.module("myApp", []);

app.controller("mainCtrl", function($scope, BlueService, RedService){

    $scope.blueCount = BlueService.count;
    $scope.redCount = RedService.count;
    
    $scope.blueButton = function(){
        
        $scope.blueCount = BlueService.increment();
        $scope.redCount = RedService.decrement();
            if ($scope.redCount === 0){
                $scope.redCount = RedService.reset();
            }
        }
    
    $scope.redButton = function(){
        $scope.redCount = RedService.increment();
        $scope.blueCount = BlueService.decrement();
            if ($scope.blueCount === 0){
                $scope.blueCount = BlueService.reset();
            }
    }
})