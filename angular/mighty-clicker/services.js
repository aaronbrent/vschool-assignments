var app = angular.module("myApp");

app.service('BlueService', function () {
    var self = this;
    self.count = 100;
    self.increment = function () {
         self.count++;
        return self.count;
    };
    self.decrement = function () {
        self.count--;
        return self.count;
    };
        self.reset = function(){
            return self.count = 100;
        };
})

app.service('RedService', function () {
    var self = this;
    self.count = 100;
    self.increment = function () {
        self.count++;
        return self.count;
    };
    self.decrement = function () {
         self.count--;
        return self.count;
    };
    self.reset = function(){
            return self.count = 100;
        };
})