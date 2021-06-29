"use strict";
/* global describe */
/* global it */
/* global assert */
/* global pow */

describe("sum", function () {

    describe("Sums all the elements in the array [1,1,3,3] ", function () {
        let testArray = [1, 1, 3, 3];
        let expected = 0;
        for (let x = 0; x < testArray.length; x++) {
            expected += testArray[x];
        }
        it(`${testArray} sum of all the elements is ${expected}`, function () {
            assert.equal(sum(testArray), expected);
        });
    });

    it("for empty arg the result is NaN", function () {
        assert.isNaN(sum([]));
    });

    it("for null arg the result is NaN", function () {
        assert.isNaN(sum());
    });

});

describe("multiply", function () {
    describe("Multiply all the elements in the array [1,1,3,3] ", function () {
        let testArray = [1, 1, 3, 3];
        let expected = 1;
        for (let x = 0; x < testArray.length; x++) {
            expected *= testArray[x];
        }
        it(`${testArray} mult of all the elements is ${expected}`, function () {
            assert.equal(multiply(testArray), expected);
        });
    });

    it("for empty arg the result is NaN", function () {
        assert.isNaN(multiply([]));
    });

    it("for null arg the result is NaN", function () {
        assert.isNaN(multiply());
    });
});

describe("reverse", function () {
    describe("Reverse of the String: hola amigos ", function () {
        let testStr = "hola amigos";
        let expected = "sogima aloh";

        it(`${testStr} reverse is ${expected}`, function () {
            assert.equal(reverse(testStr), expected);
        });
    });

    it("for empty arg the result is NaN", function () {
        assert.isNaN(reverse([]));
    });

    it("for null arg the result is NaN", function () {
        assert.isNaN(reverse());
    });
});

describe("filterLongWords", function () {
    describe("Filter longer words than 5: [maldita, lisiada, te, besaste, con, mi, nandito] ", function () {
        let testArray = ["maldita", "lisiada", "te", "besaste", "con", "mi", "nandito"];
        let expected = ["maldita", "lisiada", "besaste", "nandito"];
        let val = 5;
        it(`${testArray} filtering the long words ${expected}`, function () {
            assert.equal(filterLongWords(testArray, val).toString(), expected.toString());
        });
    });

    it("for empty arg the result is NaN", function () {
        assert.isNaN(filterLongWords([], 0));
    });

    it("for null arg the result is NaN", function () {
        assert.isNaN(filterLongWords());
    });
});