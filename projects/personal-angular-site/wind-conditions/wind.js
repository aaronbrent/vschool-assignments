var app = angular.module('windApp')

app.controller('windCtrl', function ($scope, wUnderground) {
            $scope.test = "wind controller is connected";
            
            wUnderground.getWeather()
                .then(function (weather) {
                    $scope.wind = weather.current_observation.wind_mph;
                    $scope.windGust = weather.current_observation.wind_gust_mph;
                    $scope.windDir = weather.current_observation.wind_dir;
                    $scope.icon = weather.current_observation.icon_url;
                    var value = weather.current_observation.wind_degrees;
                    $scope.transform = "rotate("+(value+180)+"deg)";
                    
                });
        
});