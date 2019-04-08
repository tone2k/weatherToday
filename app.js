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

myWeatherApp.controller("weatherController", ["$scope", "cityService", "$resource", function ($scope, cityService, $resource) {

    $scope.city = cityService.city

    $scope.days = $routeParams.days || '2';
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
        callback: "JSON_CALLBACK"
    }, {
        get: {
            method: "JSONP"
        }
    });
    $scope.weatherResult = $scope.weatherAPI.get({
        zip: "22202,us",
        cnt: $scope.days,
        APPID: "8375f3c8e599fdb34d6658220af8d8c3"
    });
    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
    };
}]);