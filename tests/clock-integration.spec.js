'use strict';
var path = require('path');
var child = require('child_process');
var expect = require('chai').expect;

describe('a clock face', () => {
    let proc;

    function testClock(time, expected, done) {
        proc.stdout.once('data', function(output) {
            proc.stdin.write(`${time}\r`);
            proc.stdout.once('data', function(output) {

                expect(output.toString('utf-8').replace(/\n\r/, '')).to.eq(expected);
                done();
            });
        });
    }


    describe('with the default renderer', () => {
        const exec = path.join(__dirname, '..', 'index.js');

        beforeEach(()=> {
            proc = child.spawn(exec, {stdio: 'pipe'});
        });

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

        it('return an error message with invalid input', (done) => {
            testClock('24:00', 'Invalid time. Input must be in hh:mm format e.g. 13:30', done);
        });
    })

    describe('with a custom renderer', () => {
        const exec = path.join(__dirname, '..', 'index.js');

        beforeEach(()=> {
            proc = child.spawn(exec, ['--renderer=clockface-pocketascii'], {stdio: 'pipe'});
        });

        it('use a specific renderer when instructed', (done) => {
            const expected =
`  ooo
 o   o
o     o
 o   o
  oxo`;
            testClock('06:30', expected, done);
        });
    });
});
