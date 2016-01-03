(function(){
    angular.module('App').controller('HanoiController', HanoiController);
    HanoiController.$inject = ['$timeout']
    
    function HanoiController($timeout) {
        var vm = this;
        var result = [];
        vm.data = [];
        hanoi(4, 'A', 'B', 'C');
        var defer = Promise.defer();
        var p = defer.promise;
        for(var value of result) {
            p = p.then(genFunc(value));
        }
        defer.resolve(0);

        function genFunc(value) {
            return () => {
                var defer = Promise.defer();
                $timeout(function(){
                    defer.resolve(0);
                    vm.data.push(value);
                }, 1000);
                return defer.promise;
            };
        }

        function hanoi(n, src, middle, dest) {
            if(n === 0)
                return;
            hanoi(n-1, src, dest, middle);
            result.push(`move ${n} from ${src} to ${dest}`);
            hanoi(n-1, middle, src, dest);
        }
    }
})();
