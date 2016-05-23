'use strict';
var expect = require('chai').expect;
const mapHourToInterval = require('../src/mappings').mapHourToInterval;
const mapMinuteToInterval = require('../src/mappings').mapMinuteToInterval

describe('mapping hours to intervals', () => {
  it('should map each AM hour to the range 0..11', () => {
    expect(mapHourToInterval(0)).to.equal(0);
    expect(mapHourToInterval(1)).to.equal(1);
    expect(mapHourToInterval(11)).to.equal(11);
  });

  it('should map each PM hour to the range 0..11', () => {
    expect(mapHourToInterval(12)).to.equal(0);
    expect(mapHourToInterval(20)).to.equal(8);
    expect(mapHourToInterval(23)).to.equal(11);
  });
});

describe('mapping minutes to intervals', () => {
  it('should map each five minute increment to the range 0..11', () => {
    expect(mapMinuteToInterval(0)).to.equal(0);
    expect(mapMinuteToInterval(5)).to.equal(1);
    expect(mapMinuteToInterval(10)).to.equal(2);
    expect(mapMinuteToInterval(55)).to.equal(11);
  });

  it('should round down fractions to the nearest inverval', () => {
    expect(mapMinuteToInterval(1)).to.equal(0);
    expect(mapMinuteToInterval(2)).to.equal(0);
    expect(mapMinuteToInterval(3)).to.equal(0);
    expect(mapMinuteToInterval(4)).to.equal(0);

    expect(mapMinuteToInterval(6)).to.equal(1);
    expect(mapMinuteToInterval(7)).to.equal(1);
    expect(mapMinuteToInterval(8)).to.equal(1);
    expect(mapMinuteToInterval(9)).to.equal(1);
  });
});
