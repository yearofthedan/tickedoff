'use strict';
var expect = require('chai').expect;
const checkInput = require('../src/input-validation').checkInput;

describe('input validation', () => {
  describe('malformed input', () => {
    const invalidTime = ['-1', 'one-am', undefined, null];

    invalidTime.forEach(scenario => {
        it(`should report invalid time when ${scenario} is supplied`, () => {
            expect(() => checkInput(scenario)).to.throw('Invalid time format');
        });
    })
  });

  describe('hour validation', () => {
    const invalidTime = ['24:23', '9:30'];

    invalidTime.forEach(scenario => {
        it(`should report invalid time when ${scenario} is supplied`, () => {
            expect(() => checkInput(scenario)).to.throw('Invalid time format');
        });
    })
  });

  describe('minute validation', () => {
    const invalidTime = ['10:-1', '10:fifteen', '10:60', '10:3'];

    invalidTime.forEach(scenario => {
        it(`should report invalid time when ${scenario} is supplied`, () => {
            expect(() => checkInput(scenario)).to.throw('Invalid time format');
        });
    })
  });
})
