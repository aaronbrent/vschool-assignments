var app = angular.module('techApp', ['ngRoute']);



app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/othertech", {
            templateUrl: "cooltech/othertech.html",
            controller: "coolTech"
        })
        .when("/desiredtech", {
            templateUrl: "desiredtech/desiredtech.html",
            controller: "desTech"
        })
        .otherwise({
            redirectTo: "/desiredtech"
        });
}]);