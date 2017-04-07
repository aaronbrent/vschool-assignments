var app = angular.module('windApp', ['ngRoute']);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/flight", {
            templateUrl: "flight/flight.html",
            controller: "flightCtrl"
        })
        .when("/wind", {
            templateUrl: "wind-conditions/wind-conditions.html",
            controller: "windCtrl"
        })
        .when("/weather", {
            templateUrl: "weather/weather.html",
            controller: "weatherCtrl"
        })
        .otherwise({
            redirectTo: "/flight"
        });
}]);
