var app = angular.module("hitList");

app.service("listCall", function ($http){
    
    
    
    this.getList = function (){
      var theList = [];
       return $http.get('http://api.vschool.io:6543/hitlist.json')
        .then(function (response){
            theList = response.data;
            
           console.log(theList);
            return theList;
        });
    }
});
