describe('DAY 5: Test Grouping', () => {

    it('change the code to make the second expect throw and error', () => {
       try {
           let a;
       } catch (error) {
           throw 'b is not defined'
       }
      

        expect(a).toBe(undefined);
        expect(() => b).toThrow(`b is not defined`);

    });
});
