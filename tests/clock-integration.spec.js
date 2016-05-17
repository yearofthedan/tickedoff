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

    it('return a clock face with different hour and minute hands', function(done) {
        const expected =
`        o
    o       o

 o             o

h               o

 o             o

    m       o
        o`;

        proc.stdout.once('data', function(output) {
            proc.stdin.write('21:35\r');
            proc.stdout.once('data', function(output) {
                expect(output.toString('utf-8')).to.eq(expected);
                done();
            });
        });
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

        proc.stdout.once('data', function(output) {
            proc.stdin.write('04:59\r');
            proc.stdout.once('data', function(output) {
                expect(output.toString('utf-8')).to.eq(expected);
                done();
            });
        });
    });
});
