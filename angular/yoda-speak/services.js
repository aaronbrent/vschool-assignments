var app = angular.module ("yodaApp");

app.service("callService", function($http){
    var config = {  
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    
    this.translate = function(inputText){
        var translatedStr = '';
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + inputText, config)
            .then(function (response){
                translatedStr = response.data;
            console.log(response.data);  
            return translatedStr;
        })
    }
});