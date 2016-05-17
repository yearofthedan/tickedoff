'use strict';
var expect = require('chai').expect;
const checkInput = require('../src/input-validation').checkInput;

describe('input validation', () => {
    const invalidTime = ['-1', 'one-am', undefined, null, '24:23', '20:60', '9:30', '10:3'];

    invalidTime.forEach(scenario => {
        it(`should report invalid time when ${scenario} is supplied`, () => {
            expect(() => checkInput(scenario)).to.throw('Invalid time format');
        });
    })

})
