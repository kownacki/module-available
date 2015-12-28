"use strict";

var chai = require("chai");

var sut = require(".");

describe("module-available", function() {
    it("should return 'true' if a module is available", function () {
        chai.expect(sut("baconjs")).to.equal(true);
    });

    it("should return 'false' if a module is not available", function () {
        chai.expect(sut("module-that-certainly-does-not-exist")).to.equal(false);
    });
});
