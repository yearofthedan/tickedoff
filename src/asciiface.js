#!/usr/bin/env node

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const checkInput = require('./input-validation').checkInput;

function normaliseHourToClockInterval(hour) {
    return hour % 12;
}

const minutesPerInterval = 5;
function normaliseMinuteToClockInterval(minutes) {
    return Math.floor(minutes / minutesPerInterval);
}

function parseIntervals(theTime) {
    const hourHand = normaliseHourToClockInterval(theTime.split(':')[0]);
    const minuteHand = normaliseMinuteToClockInterval(theTime.split(':')[1]);
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
