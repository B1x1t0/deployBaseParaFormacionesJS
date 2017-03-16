'use strict';

import myFunct from './my.module';

const App = function () {
        this.test = 'Testable variable';
};

App.prototype = {
    get: function () {
        return this.test;
    }
}

module.exports = App;

console.log('Refactor me');

myFunct();
