"use strict";

var chai = require("chai");

var sut = require("./");

function notBrokenTypeof(value) {
    if (value === null) {
        return "null";
    }
    return (typeof value);
}

describe("module-available", function() {
    it("should return 'true' if a module is available", function() {
        chai.expect(sut("baconjs")).to.equal(true);
    });

    it("should return 'false' if a module is not available", function() {
        chai.expect(sut("module-that-certainly-does-not-exist")).to.equal(false);
    });

    [null, undefined, true, 42, {}].forEach(function(value) {
        it("should throw if called with '" + notBrokenTypeof(value) + "'", function() {
            chai.expect(sut.bind(undefined, value)).to.throw(TypeError, "Passed parameter must be a string.");
        });
    });
});
