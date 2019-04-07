// Angular Module 

myWeatherApp = angular.module("myWeatherApp", ["ngRoute", "ngResource"]);

// Angular Routes
myWeatherApp.config(function ($routeProvider) {
    $routeProvider

    .when("/", {
        templateUrl: "pages/main.htm",
        controller: "mainController"
    })

    .when("/weather", {
        templateUrl: "pages/weather.html",
        controller: "weatherController"
    })

});

// Angular Controllers

myWeatherApp.controller("mainController", ["$scope", function($scope){

}]);

myWeatherApp.controller("weatherController", ["$scope", function ($scope) {

}]);