describe('test anuglar mocks timeout', () => {
    var a,b,c,timeout;
    beforeEach(inject(($timeout) => {
        $timeout(() => a = 3, 1500)
        $timeout(() => b = 3, 1000)
        $timeout(() => c = 3, 500)
        timeout = $timeout;
    }));

    it('use flush', () => {
        timeout.flush();
        expect(a).toEqual(3);
        expect(b).toEqual(3);
        expect(c).toEqual(3);
    });
});
