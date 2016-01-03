(function() {
    angular.module('App').config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/home', {
                templateUrl: '/app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            }).
            when('/hanoi', {
                templateUrl: '/app/hanoi/hanoi.html',
                controller: 'HanoiController',
                controllerAs: 'hanoi'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);
})();
