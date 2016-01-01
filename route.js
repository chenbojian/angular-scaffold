(function() {
    angular.module('App').config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/home', {
                templateUrl: 'home.html',
                controller: 'MainController',
                controllerAs: 'main'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);
})();
