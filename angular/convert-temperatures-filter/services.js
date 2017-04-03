var app = angular.module("tempApp");

app.service("darkSky", function($http){
    
    var config = {  
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    
    
    this.getWeather = function (){
        var weather = {};
           return $http.jsonp('https://api.darksky.net/forecast/0f6e26b120844dbab5ad2a865c461112/40.7608,-111.8910' + "?callback=JSON_CALLBACK",  config).then(function (response) {
            weather = response
               return weather;
                
        });
    }
})

