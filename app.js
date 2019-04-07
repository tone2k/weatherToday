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

// Angular Services

myWeatherApp.service("cityService", function() {
    this.city = "Arlington, Virginia";
});

// Angular Controllers

myWeatherApp.controller("mainController", ["$scope", "cityService", function($scope, cityService){

    $scope.city = cityService.city

    $scope.$watch("city", function () {
        cityService.city = $scope.city;
    });

}]);

myWeatherApp.controller("weatherController", ["$scope", "cityService", function ($scope, cityService) {

    $scope.city = cityService.city

}]);