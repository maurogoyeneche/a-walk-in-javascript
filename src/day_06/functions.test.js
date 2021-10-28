describe('DAY 6: Test Functions', () => {

    it(`(function statement)
        declare a function named hello`, () => {

       const hello = new Function()

        expect(hello).toBeInstanceOf(Function);
    });

    it(`(anonymous function expression)
        write an anonymous function expression with an empty body`, () => {

       const hello = new Function()

        expect(hello).toBeInstanceOf(Function);
        expect(hello.toString().replace(/[^a-z0-9_$]/igm, '')).toBe('function');
    });

    it(`(named function expression)
        write a named function expression with an empty body`, () => {

       const hello = () =>{}

        expect(hello).toBeInstanceOf(Function);
        expect(hello.toString().replace(/[^a-z0-9_$]/igm, '')).toMatch(/^function[a-z0-9_$]+$/);
    });

    it(`(IIFE)
        convert function a into an IIFE`, () => {

        let a = 1;
        (function hello(){})();
        /**
         * @returns {undefined}
         */
        function b () {
            a++;
        }

        expect(a).toBe(2);
    });

    it(`(Function arity)
        get the function's arity and assign it to the arity variable to match the test`, () => {
        /**
         * 
         * @param {*} b 
         * @param {*} c 
         * @param {*} d 
         * @param {*} e 
         * @returns {undefined}
         */
        function a (b, c, d, e) {
            return b + c + d + e
        }

        // add your code here
        let arity = a(1, 1, 1, 1);

        expect(arity).toBe(4);
    });

    it(`(Properties of a function)
        get the name of myFunction`, () => {
        /**
         * 
         * @returns {undefined}
         */
         const myFunction = function () {};

        // change the test
        expect(myFunction.name).toBe('myFunction');
    });

    it(`(Side effect)
        change to code to avoid function b to have side effects on a`, () => {
        let a = 1;
        /**
         * 
         * @param {*} b
         * @returns {undefined}
         */
        function b () {
            // add your code here
            
            return 3;
        }

        expect(a).toBe(1);
        expect(b()).toBe(3);
        // intentional repetition
        expect(a).toBe(1);
        expect(b()).toBe(3);
    });

});
