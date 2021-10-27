
describe('DAY 5: Iterable/Iterator', () => {

    it(`get the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorFunction = ()=>{
            for(let i of string){
                console.log(i)
            }
        };

        expect(theIteratorFunction).toBeInstanceOf(Object);
        expect(theIteratorFunction).toBeInstanceOf(Function);

    });

    it(`get the iterator object returned by the iterator function of a String`, () => {
        let string = 'hello';
       
        let theIteratorObject = ()=>{
            for(let i in string){
                console.log(string[0])
            }
        };
        expect(theIteratorObject).toBeInstanceOf(Object);

    });

    it(`get the string representation
        of the iterator object returned by the iterator function of a String`, () => {
        let string = 'hello';
        const iterator = string[Symbol.iterator()]
        let theIteratorObjectCoercedToString = iterator.next();
        // FALLO

        expect(theIteratorObjectCoercedToString).toBe('[object String Iterator]');

    });

    it(`get the next method returned by the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorNextMethod;

        expect(theIteratorNextMethod).toBeInstanceOf(Object);
        expect(theIteratorNextMethod).toBeInstanceOf(Function);

    });

    it(`get at least 1 value returned by the next method returned by the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorNextMethodValue;

        expect(theIteratorNextMethodValue).toBe('h');

    });

    it(`make your own test to get all values from a String using the iterable protocol`, () => {
        // I'm throwing and error to make it fail, remove it and add your code
        throw Error('do not cheat 3:) ');
    });
});
