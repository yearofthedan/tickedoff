'use strict';
var path = require('path');
var child = require('child_process');
var expect = require('chai').expect;

const exec = path.join(__dirname, '..', 'src', 'asciiface.js');

describe('an ascii clock face', () => {

    let proc;

    beforeEach(()=> {
     proc = child.spawn(exec, {stdio: 'pipe'});
    });

    function testClock(time, expected, done) {
        proc.stdout.once('data', function(output) {
            proc.stdin.write(`${time}\r`);
            proc.stdout.once('data', function(output) {

                expect(output.toString('utf-8').replace(/\n\r/, '')).to.eq(expected);
                done();
            });
        });
    }

    it('return a clock face with different hour and minute hands', function(done) {
        const expected =
`        o
    o       o

 o             o

h               o

 o             o

    m       o
        o`;
        testClock('21:35', expected, done);
    });

    it('return a clock face with rounded down minutes', (done) => {
        const expected =
`        o
    m       o

 o             o

o               o

 o             h

    o       o
        o`;
        testClock('04:59', expected, done);
    });

    it('return a clock face with the hour and minute hand on the same interval', (done) => {
        const expected =
`        o
    o       o

 o             o

o               o

 o             o

    o       o
        x`;
        testClock('06:30', expected, done);
    });
});
