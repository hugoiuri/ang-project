var angProject = angular.module('ang-project', ['ngRoute']);

(function(app) {
    'use strict'
    
    app.controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    });

    app.controller('Page1Controller', function($scope, $routeParams) {
        $scope.name = 'Page1Controller';
        $scope.params = $routeParams;
    });
    
    app.controller('Page2Controller', function($scope, $routeParams) {
        $scope.name = 'Page2Controller';
        $scope.params = $routeParams;
    });
    
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
            controller: 'Page1Controller',
            templateUrl: 'page1.html'
        });

        $routeProvider.when('/page1', {
            controller: 'Page1Controller',
            templateUrl: 'page1.html'
        });
        
        $routeProvider.when('/page2', {
            controller: 'Page2Controller',
            templateUrl: 'page2.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
        
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
})(angProject);