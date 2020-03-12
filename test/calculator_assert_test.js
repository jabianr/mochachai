var assert = require("chai").assert;
var calculator = require("../app/calculator");
describe("Calcultator tests using ASSERT interface from CHAI module: ", function() {
    describe("Check sum Function: ", function() {
        it("Validate the result using: assert.equal(value,'value'): ", function() {
            let result = calculator.sum(1, 2);
            assert.equal(result, 3);
        });
    });
});