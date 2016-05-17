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

    it('tests', function(done) {
        proc.stdout.once('data', function(output) {
            proc.stdin.write('11:00\r');
            proc.stdout.once('data', function(output) {
                expect(output.toString('utf-8')).to.eq('I am a clock at 11:00');
                done();
            });
        });
    });
});
