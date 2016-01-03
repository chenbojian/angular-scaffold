describe('first', () => {
    var hanoi;
    beforeEach(module('App'));

    beforeEach(inject(($controller,$timeout, $rootScope) =>{
        hanoi = $controller('HanoiController');
        $rootScope.$apply();
        try{
            //timeout wrapped in promise ......
            while(true)
                $timeout.flush();
        } catch (e) {
            $timeout.verifyNoPendingTasks();
        }
    }));

    it('first', () => {
        expect(1).toEqual(1);
    });

    it('hanoi', () => {
        expect(hanoi.data.length).toEqual(15);
    });
});
