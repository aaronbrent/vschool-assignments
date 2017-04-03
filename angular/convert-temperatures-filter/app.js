var app = angular.module("tempApp", []);

app.controller("mainCtrl", function($scope, darkSky){
    $scope.test = "it's connected"

    darkSky.getWeather().then(function(weather){
        $scope.weather = weather.data.currently.temperature;
        console.log(weather);
    });
    
    $scope.temps = [10, 15, 20, 25, 30];
})





app.filter('tempConvert', function() {

  
  return function(temp) {

    var output = temp * 9 / 5 + 32;

    

    return output;

  }

});