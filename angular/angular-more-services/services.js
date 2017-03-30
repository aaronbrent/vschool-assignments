var app = angular.module("myApp");

app.service('Cartoons', function(){
    var self = this;
    this.cartoonList = [];
    this.addCartoon = function(toon){
        self.cartoonList.push(toon);
        return self.cartoonList;
    }
});