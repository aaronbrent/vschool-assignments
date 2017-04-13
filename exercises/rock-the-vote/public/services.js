var app = angular.module("voteApp");

app.service("callService", function ($http) {

    this.listCall = function () {
        var list = {};
        return $http.get('http://localhost:8000/issue/').then(function (response) {
            console.log(response.data);
            list = response.data;
            return list;

        });
    }

    this.createPost = function (newPost) {
        var post = {};
        return $http.post('http://localhost:8000/issue/', newPost)
            .then(function (response) {
                console.log(response.data);
                post = response.data;
                return post;
            });
    }

    this.deletePost = function (issue) {
        var id = issue._id
        return $http.delete('http://localhost:8000/issue/' + id).then(function (response) {
            return "You have deleted the item with id " + id;
        })

    }


    this.editPost = function (issue) {
        return $http.put('http://localhost:8000/issue/' + issue._id, issue);
    }




})
