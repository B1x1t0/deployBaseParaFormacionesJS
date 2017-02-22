'use strict';

const App = function () {
        this.test = 'Testable variable';
};

App.prototype = {
    get: function () {
        return this.test;
    }
}

module.exports = App;
