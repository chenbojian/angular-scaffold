(function() {
    angular.module('App').controller('MainController', MainController);
    
    MainController.$inject = [];
    
    function MainController(){
        this.welcome = 'Hello World';
    }
})();
