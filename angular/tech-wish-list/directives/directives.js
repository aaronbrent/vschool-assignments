var app = angular.module('techApp');

app.directive('displayTech', function(){
    return {
        restrict: 'E',
        scope: {
            items: '='    
        },
        templateUrl: "directives/directives.html"
    };
});