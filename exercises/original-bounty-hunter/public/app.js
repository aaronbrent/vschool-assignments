var app = angular.module('bountyHunter', []);

app.controller('bountyCtrl', function ($scope, serverCall) {
    $scope.test = 'connected';

    $scope.bounties = [];
    $scope.submitBtn = function (info) {
        var newBounty = info;
        
        serverCall.createBounty(info).then(function (newBounty){
            $scope.bounties.push(newBounty);    
        })
    }

    serverCall.getBounties().then(function (response) {
        $scope.bounties = response;
    })

    $scope.deleteBtn = function (index, item) {
        console.log(item.firstName)
        $scope.bounties.splice(index, 1);
        serverCall.deleteBounty(index, item); 
    }

    $scope.edit = function (item) {
        serverCall.editBounty(item).then(function () {

        })
    }
});



app.service('serverCall', function ($http) {

    this.getBounties = function () {
        return $http.get('/bounty').then(function (response) {
            return response.data
        })
    }

    this.createBounty = function (inputs) {
        var post = [];
        return $http.post('/bounty', inputs)
            .then(function (response) {
                console.log(response.data);
                post = response.data;
                return post;
            });
    }

    this.deleteBounty = function (index, id) {

        return $http.delete('/bounty/' + id._id).then(function (response) {
            return "You have deleted the item with id " + id;
        })

    }


    this.editBounty = function (item) {
        return $http.put('/bounty/' + item._id, item);
    }
})
