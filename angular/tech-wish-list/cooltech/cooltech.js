var app = angular.module('techApp');

app.controller("coolTech", ["$scope", function ($scope) {

    $scope.coolStuff = [
        {
            image: "http://static1.businessinsider.com/image/580a1c54c5240220008b60de-2400/nintendoswitchbothways.jpg",
            price: 400
        },
        {
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTQCVhw9FLaxymwTWyXjOL2lyQZfYYaJ4cl7grJ-gqN7rou-iGV",
            name: "Google glass",
            price: 1500
        }
   ]
}]);
