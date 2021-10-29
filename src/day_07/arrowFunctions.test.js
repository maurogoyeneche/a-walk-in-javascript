
describe('DAY 7: arrow functions', () => {

    it(`complete the function code to pass the test`, () => {

        let myArrowFunction = (num1, num2) => { return {first: num1, second: num2} };

        expect(myArrowFunction(1, 2)).toEqual({ first: 1, second: 2 });

    });

});
