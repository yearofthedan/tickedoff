'use strict';
var expect = require('chai').expect;
const checkInput = require('../src/input-validation');

describe('input validation', () => {
  describe('malformed input', () => {
    const invalidTime = ['-1', 'one-am', undefined, null];

    invalidTime.forEach(scenario => {
        it(`should report invalid time when ${scenario} is supplied`, () => {
            expect(checkInput(scenario)).to.equal(false);
        });
    })
  });

  describe('hour validation', () => {
    const invalidTime = ['24:00', '9:00'];

    invalidTime.forEach(scenario => {
        it(`should report invalid time when ${scenario} is supplied`, () => {
            expect(checkInput(scenario)).to.equal(false);
        });
    })

    const validTimes = new Array(24).fill(0).map((i, x) => x < 10 ? `0${x}:00` : `${x}:00`);
    validTimes.forEach(scenario => {
        it(`should report valid time is ${scenario}`, () => {
            expect(checkInput(scenario)).to.equal(true);
        });
    })
  });

  describe('minute validation', () => {
    const invalidTime = ['10:-1', '10:fifteen', '00:60', '00:3'];

    invalidTime.forEach(scenario => {
        it(`should report invalid time when ${scenario} is supplied`, () => {
            expect(checkInput(scenario)).to.equal(false);
        });
    })

    const validTimes = new Array(60).fill(0).map((i, x) => x < 10 ? `00:0${x}` : `00:${x}`);
    validTimes.forEach(scenario => {
        it(`should report valid time is ${scenario}`, () => {
            expect(checkInput(scenario)).to.equal(true);
        });
    })
  });
})
