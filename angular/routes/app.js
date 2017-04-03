var app = angular.module("routing-practice", ["ngRoute"])

.config(["$routeProvider", function($routeProvider){
	
	$routeProvider

        .when("/about", {
            templateUrl: "about/about.html",
            controller: "AboutController"
        })
		.when("/contact",{
			templateUrl: "contact/contact.html",
			controller: "ContactController"
		})
	
}])