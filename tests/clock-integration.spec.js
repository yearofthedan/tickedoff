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
            expect(output.toString('utf-8')).to.eq('I am a clock');
            done();
    });
  });

    // describe('the time is 00:00', () => {
    //     it('should display the time with the hand and minute in the same place', () => {
    //
    //
    //     });
    // });
    //
    // describe('the time is 6:45', () => {
    //     it('should display the time with the hour and minute separately');
    // });
    //
    // describe('the time is 11:59', () => {
    //     it('should round down the minutes to 55');
    // });
});
