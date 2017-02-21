const assert = require('assert');
const chai = require('chai');
const expect = require('expect.js');

describe('Environment', function () {
    var ok, ko;

    before(function () {
        ok = true;
        ko = false;
    });

    beforeEach(function () {
        ko = false
    });

    it('should run tests using Mocha style', function () {
        assert(ok, 'Using Mocha assertions');
    });

    it('should run tests using chai style', function () {
        chai.assert.notOk(ko, 'Using Chai assertions');
    });

    it('should run tests using BDD expect style', function () {
        expect(ko).to.be.false;
    });
});
