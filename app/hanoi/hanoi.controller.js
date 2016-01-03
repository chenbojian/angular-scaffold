(function(){
    angular.module('App').controller('HanoiController', HanoiController);
    HanoiController.$inject = ['$q', '$timeout']
    
    function HanoiController($q, $timeout) {
        var vm = this;
        var result = [];
        vm.data = [];
        hanoi(4, 'A', 'B', 'C');
        var defer = $q.defer();
        var p = defer.promise;
        for(var value of result) {
            p = p.then(delay);
            p = p.then(genFunc(value));
        }
        defer.resolve(0);

        function genFunc(value) {
            return () => {
                vm.data.push(value);
            };
        }
        function delay() {
            return new $q((resolve) => $timeout(resolve, 1000));
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
