(function() {
    angular.module('App').config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/home', {
                templateUrl: '/app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);
})();
