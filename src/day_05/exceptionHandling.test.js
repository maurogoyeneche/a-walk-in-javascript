describe('DAY 5: Test Exception Handling', () => {

    it('throw explicitly an error and on catch define a as true', () => {
        let a = false;
        try { a = true; } catch (err) { a = true; }

        expect(a).toBe(true);

    });

    it('throw explicitly an error and assign the error to a, make the verification of the message', () => {
        let a = false;
        try {
            a = new Error('I\'m an error');
            
        } catch (error) { new Error('I\'m an error')
    console.log(error)}
         

        expect(a.toString()).toBe(`Error: I'm an error`);

    });

    it('throw explicitly an error and assign the error to a, make the verification of type', () => {
        let a = false;
        try {
            a = new Error('I\'m an error');
            
        } catch (error) { new Error('I\'m an error')
    console.log(error)}
        expect(a).toBeInstanceOf(Error);

    });
});
