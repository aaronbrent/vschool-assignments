var app = angular.module('windApp');

app.service("wUnderground", function ($http) {
    var weather = {};
    
//    this.city ="";
    
    
    this.getWeather = function () {
        return $http.get('http://api.wunderground.com/api/1d7ba87d3b4279c7/conditions/q/UT/' + this.city + '.json')
            .then(function (response) {
                console.log(response.data);
                weather = response.data;
                return weather;

            });
    }
});



