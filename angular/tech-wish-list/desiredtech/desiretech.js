var app = angular.module('techApp');
app.controller("desTech", ["$scope", function ($scope) {
    $scope.coolStuff = [
        {
            image: "https://www.tesla.com/configurator/compositor/?model=mx&view=STUD_SIDE&options=X021,COL1-PBSB,DRLH,FG00,PI00,TP00,RFPX,WT20&size=476",
            name: "Tesla Model X",
            price: 90000
        },
        {
            image: "https://s3.amazonaws.com/mailmunch/widgets/1489522775.jpeg",
            name: "Teal Drone",
            price: 1200
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0999/9484/products/2_2048x2048.png?v=1480791607",
            name: "Electric longboard",
            price: 500
        },
        {
            image: "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/3972500_fpx.tif?op_sharpen=1&wid=400&hei=489&fit=fit,1&$filterlrg$",
            name: "Apple Watch",
            price: 400
        }
    ]
}]);

