var app = angular.module('windApp')

app.controller('flightCtrl', function ($scope, wUnderground) {
    var myWeather;
    
    wUnderground.city = 'Salt_Lake_City';
    $scope.theCity = "Salt Lake City";
    
    wUnderground.getWeather(wUnderground.city);
    
    $scope.setCity = function (city){
        
        wUnderground.city = city;
        

    wUnderground.getWeather(wUnderground.city)
        .then(function (weather) {
            $scope.theCity = weather.current_observation.display_location.city;
            var wind = weather.current_observation.wind_mph;
            var windGust = parseInt(weather.current_observation.wind_gust_mph);
            var temp = weather.current_observation.temp_f;
            
            
        
            if (wind > 10 || windGust > 5 || temp > 79){
                $scope.assesment = false;    
            }else{
                $scope.assesment = true;
            }
            console.log(wind);
            console.log(windGust);
            console.log(temp);
        });


    }


})
