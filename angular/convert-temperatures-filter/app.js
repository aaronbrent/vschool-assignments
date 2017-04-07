var app = angular.module("tempApp", []);

app.controller("mainCtrl", function($scope, darkSky){
    $scope.test = "it's connected"

    darkSky.getWeather().then(function(weather){
        $scope.weather = Math.round(weather.data.currently.temperature);
        console.log(weather);
    });
    
    $scope.temps = [10, 15, 20, 25, 30];
    
    $scope.data = {
        singleSelect: 'option-2',
        option1: 'option-1',
        option2: 'option-2',
        option3: 'option-3',
   };
    
});





app.filter('fahrConvert', function() {
 
  return function(temp) {

    var output = Math.round(temp * 9 / 5 + 32);

     return output;

  }

});

app.filter('celsConvert', function() {
 
  return function(temp) {

    var output = Math.round((5/9) * (temp - 32));

     return output;

  }

});

app.filter('kelvConvert', function() {
 
  return function(temp) {

    var output = Math.round(((temp - 32) * (1/180)) + 273.15);

     return output;

  }

});

