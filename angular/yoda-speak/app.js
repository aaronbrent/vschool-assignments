var app = angular.module ("yodaApp", []);

app.controller("mainCtrl",["$scope", "callService", function($scope, callService){
    
    $scope.subBtn = function (inputText){
        callService.translate(inputText).then(function(response){
            $scope.translated = response;
        })
    };
    
    

}]);