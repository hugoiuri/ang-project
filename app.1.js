var angProject = angular.module('ang-project', ['ngRoute']);

(function(app) {
    'use strict'

    app.controller('MainController', ($scope) => {
        $scope.name = "home"
    });

    app.controller('Page1Controller', function($scope) {
        $scope.name = 'Page 1';
    });

    app.controller('Page2Controller', function($scope) {
        $scope.name = 'Page 2';
    });

    app.config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'page1.html',
            controller: 'Page1Controller'
        });

        $routeProvider.when('/page1', {
            templateUrl: 'page1.html',
            controller: 'Page1Controller'
        });
        
        $routeProvider.when('/page2', {
            templateUrl: 'page2.html',
            controller: 'Page2Controller'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
})(angProject);