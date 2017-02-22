const assert = require('assert');
const chai = require('chai');
const expect = require('expect.js');
const App = require('../src/app');

describe('Environment', function () {
    let ok, ko;

    before(function () {
        ok = true;
        ko = true;
    });

    beforeEach(function () {
        ko = false;
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

    describe('App', function () {
        let app;

        before(function () {
            app = new App();
        });

        it('should get app', function () {
            console.log('Running');

            expect(app.get()).to.be('Testable variable');
        });
    });
});
