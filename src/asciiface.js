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

function writeOut(message) {
    process.stdout.write(`${message}\n\r`);
}

function clockFromIntervals(intervals) {
    return `        ${intervals[0]}
    ${intervals[11]}       ${intervals[1]}

 ${intervals[10]}             ${intervals[2]}

${intervals[9]}               ${intervals[3]}

 ${intervals[8]}             ${intervals[4]}

    ${intervals[7]}       ${intervals[5]}
        ${intervals[6]}`;
}

const minutesPerInterval = 5;

rl.question('Enter the time: ', theTime => {

    try {
        checkInput(theTime);
        const hourHand = normaliseHourToClockInterval(theTime.split(':')[0]);
        const minuteHand = Math.floor(theTime.split(':')[1] / minutesPerInterval);

        const intervals = new Array(12).fill('o');
        intervals[hourHand] = 'h';
        intervals[minuteHand] = minuteHand === hourHand ? 'x' : 'm';

        writeOut(clockFromIntervals(intervals));
    }
    catch(e) {
        if (e.message === 'Invalid time format') {
            writeOut('Invalid time. Input must be in hh:mm format e.g. 13:30');
        }
    }
    rl.close();
});
