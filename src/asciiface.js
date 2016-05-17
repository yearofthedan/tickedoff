#!/usr/bin/env node

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const checkInput = require('./input-validation').checkInput;

const mapHourToInterval = require('../src/time-to-interval-mapping').mapHourToInterval;
const mapMinuteToInterval = require('../src/time-to-interval-mapping').mapMinuteToInterval

const getHourFromTime = theTime => theTime.split(':')[0];
const getMinutesFromTime = theTime => theTime.split(':')[1];

function parseIntervals(theTime) {
    const hourHand = mapHourToInterval(getHourFromTime(theTime));
    const minuteHand = mapMinuteToInterval(getMinutesFromTime(theTime));
    const intervals = new Array(12).fill('o');
    intervals[hourHand] = 'h';
    intervals[minuteHand] = minuteHand === hourHand ? 'x' : 'm';
    return intervals;
}

function writeOut(message) {
    process.stdout.write(`${message}\n\r`);
}

const clockFromIntervals = (intervals) =>
`        ${intervals[0]}
    ${intervals[11]}       ${intervals[1]}

 ${intervals[10]}             ${intervals[2]}

${intervals[9]}               ${intervals[3]}

 ${intervals[8]}             ${intervals[4]}

    ${intervals[7]}       ${intervals[5]}
        ${intervals[6]}`;

rl.question('Enter the time: ', theTime => {

    try {
        checkInput(theTime);
        const intervals = parseIntervals(theTime);
        writeOut(clockFromIntervals(intervals));
    }
    catch(e) {
        if (e.message === 'Invalid time format') {
            writeOut('Invalid time. Input must be in hh:mm format e.g. 13:30');
        }
    }
    rl.close();
});
