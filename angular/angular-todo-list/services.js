var app = angular.module("myApp");

app.service("callService", function($http){
    
    this.listCall = function(){
        var list = {};
           return $http.get('http://api.vschool.io/aaronellis/todo').then(function (response) {
            list = response.data;
               return list;
                console.log(response.data);
        });
    }
    
    this.createPost = function(inputs){
        var post = {};
        return $http.post('http://api.vschool.io/aaronellis/todo/', inputs)
            .then(function (response) {
            console.log (response.data);
               post = response.data;
            return post;
            });    
    }
    
    this.deletePost = function(index, id){

        return $http.delete('http://api.vschool.io/aaronellis/todo/' + id).then(function(response){
            return "You have deleted the item with id " + id;
        })
          
    }
    
    
    this.editPost = function(item){
        return $http.put('http://api.vschool.io/aaronellis/todo/' + item._id, item);        
    }
    
    
    
    
})