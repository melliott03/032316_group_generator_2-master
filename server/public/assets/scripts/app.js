var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/two", {
            templateUrl: "/views/routes/two.html",
            controller: "OurController"
        }).
        when("/three", {
            templateUrl: "/views/routes/three.html",
            controller: "OurController"
        }).
        when("/four", {
            templateUrl: "/views/routes/four.html",
            controller: "OurController"
        }).
        when("/five", {
            templateUrl: "/views/routes/five.html",
            controller: "OurController"
        }).
        when("/six", {
            templateUrl: "/views/routes/six.html",
            controller: "OurController"
        }).
        when("/seven", {
            templateUrl: "/views/routes/seven.html",
            controller: "OurController"
        }).
        when("/eight", {
            templateUrl: "/views/routes/eight.html",
            controller: "OurController"
        }).
        when("/nine", {
            templateUrl: "/views/routes/nine.html",
            controller: "OurController"
        }).
        when("/ten", {
            templateUrl: "/views/routes/ten.html",
            controller: "OurController"
        }).
        when("/eleven", {
            templateUrl: "/views/routes/eleven.html",
            controller: "OurController"
        })
}]);
