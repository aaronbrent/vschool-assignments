var app = angular.module("myApp", []);

app.controller("mainController", ["$scope", "callService", function ($scope, callService) {  
    
    callService.listCall().then(function(list){
        $scope.todos = list;
    });
    
    
    
    $scope.submitBtn = function (inputs){
        
        callService.createPost(inputs).then(function(post){
            $scope.todos.push(post);
        });
        $scope.newTodo = {};
    }
    
    $scope.deleteBtn = function (index, item){
        callService.deletePost(index, item).then(function(data){
            $scope.todos.splice(index, 1); 
            console.log(data);
        })
    }
    
    $scope.edit = function(item){
     callService.editPost(item).then(function(){
         
     })        
    }
    
}]);

