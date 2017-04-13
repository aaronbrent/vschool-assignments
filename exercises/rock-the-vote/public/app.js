var app = angular.module("voteApp", []);

app.controller("mainCtrl", ["$scope", "callService", function ($scope, callService) {  
   
    
    callService.listCall().then(function(posts){
        
        $scope.issues = posts;
    });
    
    
    
    $scope.postIssue = function(newIssue){
        newIssue.rank = 0;
        newIssue.upVote = 0;
        newIssue.downVote = 0;
        newIssue.comments = []
        callService.createPost(newIssue).then(function(post){
            $scope.issues.push(post)
        });
        $scope.newIssue = {};
    }
    
    $scope.delPost = function (issue){
        callService.deletePost(issue).then(function(data){
            
            console.log(data);
        })
    }
    
    $scope.upVote = function(issue){
        issue.upVote += 1
        issue.rank += 1
     callService.editPost(issue).then(function(){
         
     })        
    }
    
    $scope.downVote = function(issue){
        issue.downVote += 1
        issue.rank -=1
     callService.editPost(issue).then(function(){
         
     })        
    }
    
    $scope.addComment = function(issue, issueComment){
        issue.comments.push(issueComment);
     callService.editPost(issue).then(function(){
         
     })  
        delete issue.comment;
    }
    
}]);

app.filter('orderObjectBy', function(){
 return function(input, attribute) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
        array.push(input[objectKey]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return b - a;
    });
    return array;
 }
});

