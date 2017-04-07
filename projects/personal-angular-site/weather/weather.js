var app = angular.module('windApp')

app.controller('weatherCtrl', function($scope, wUnderground){
//    $scope.test = "weather controller is connected";
    wUnderground.getWeather()
                .then(function (weather) {
                    $scope.temp = weather.current_observation.temp_f;
                    $scope.weath = weather.current_observation.weather;
                    $scope.visibility = weather.current_observation.visibility_mi;
                    $scope.icon = weather.current_observation.icon_url;
                    $scope.precip = weather.current_observation.precip_today_in;
  
                });
})