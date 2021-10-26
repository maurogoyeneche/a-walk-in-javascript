
describe('DAY 5: Test Branching - if...else', () => {

    it('b to be true if a is truthy', () => {
        let a = true;
        let b = false;

        if (a) {
            b = true;
        } else {
            b = false;
        }

        expect(b).toBe(true);

    });

    it('b to be false if a is truthy', () => {
        let a = true;
        let b = false;

        if (a) {
            b = false;
        } else {
            return b;
        }

        expect(b).toBe(false);

    });

    it('b to be 1 if a is truthy ( use postfix unary operator )', () => {
        let a = true;
        let b = 0;

        if (a) {
            b = 1;
        } else {
            return b;
            //
        }
        // are prefix and postfix interchangeable here?
        expect(b).toBe(1);

    });

    it('b to be -1 if a is truthy ( use prefix unary operator )', () => {
        let a = true;
        let b = 0;

        if (a) {
            b = b - 1;
        } else {
            return b;
        }
        // are prefix and postfix interchangeable here?
        expect(b).toBe(-1);

    });

});

describe('DAY 5: Test Branching - switch/break', () => {

    it('found to be true when number 7 is the first item of array', () => {
        let array = [7, 2, 4, 5, 6];
        let found = false;

        switch (array.indexOf(7)) {
            case -1:
                break;
            case 0:
                found = true;
                break;
            case 1:
                break;
            default:
                break;
        }

        expect(found).toBe(true);

    });

    it('found to be true when number 7 is not an item of array', () => {
        let array = [6, 5, 5];
        let found = false;

        switch (array.indexOf(7)) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            default:
                found = true;
                break;
        }

        expect(found).toBe(true);

    });

    it('found to be true when number 7 is at index 4 of array', () => {
        let array = [3, 4, 6, 5, 7, 8];
        let found = false;

        switch (array.indexOf(7)) {
            case 0:
                break;
            case 1:
                break;
            case 4:
                found = true;
                break;
            default:
                break;
        }

        expect(found).toBe(true);

    });

    it('found to be true when number 7 is at index 2 or 3 or 4 of array ( wanna try Fallthrough? )', () => {
        let array = [1, 2, 7, 7, 7, 8];
        let found = false;

        switch (array.indexOf(7)) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                found = true;
                break;
            case 3:
                found = true;
                break;
            case 4:
                found = true;
                break;
            case 5:
                break;
            default:
                break;
        }

        expect(found).toBe(true);

    });

});

describe('DAY 5: Test Branching - short circuit', () => {

    it('c to be "hell yeah" using logical AND to evaluate a AND b, AND the value assigned to c', () => {
        let a = 'fck';
        let b = 'off';
        let c = (a && b) && 'hell yeah';

        expect(c).toBe('hell yeah');

    });

    it('c to be "hell yeah" using logical OR to evaluate a OR b, AND the value assigned to c ( find the error and fix it )', () => {
        let a = 1;
        let b = 0;
        let c = (a || b) && 'hell yeah';

        expect(c).toBe('hell yeah');

    });

    it('c to be true IF a AND b are numbers and > than 42', () => {
        // read the test spec carefully before start coding ;)
        let a = 43;
        let b = 50;
        let c = false;
        if (a > 42 && b > 42 && typeof a === 'number' && typeof b === 'number') { c = true; } else {
            return c;
        }

        expect(c).toBe(true);

    });
});

describe('DAY 5: Test Branching - conditional operator ( ternary )', () => {

    it('c to be true IF a AND b are numbers and > than 42, else it should be false', () => {

        let a = 45;
        let b = 56;
        let c = (a && b) && true; // use ternary operator during assignment

        expect(c).toBe(true);

        a = 45;
        b = 56;
        c = (a > 42 && b > 42 && typeof a === 'number' && typeof b === 'number') ? c = true : c = false; // use ternary operator during assignment

        expect(c.toString()).toBe('Error: Not valid values for a and b');

    });

    it(`if speed is faster than 140, traffic ticket should be 8000, 
        else if, it's faster than 130, traffic ticket should be 3000
        else, traffic ticket should be 0`, () => {

        let speed;
        let trafficTicket; // use ternary operator during assignment

        expect(trafficTicket).toBe(8000);

        // change the values so the test may pass ( use ternary operator for trafficTicket )

        expect(trafficTicket).toBe(3000);

        // change the values so the test may pass ( use ternary operator for trafficTicket )

        expect(trafficTicket).toBe(0);

        /**
         * it seems we had to do some repetitive work here
         * any clue about how to avoid it?
         */
    });
});
