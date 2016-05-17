#!/usr/bin/env node

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function normaliseHourToClockInterval (hour) {
    return hour % 12;
}
const minutesPerInterval = 5;

rl.question('Enter the time: ', theTime => {
    const hourHand = normaliseHourToClockInterval(theTime.split(':')[0]);
    const minuteHand = Math.floor(theTime.split(':')[1] / minutesPerInterval);

    const intervals = new Array(12).fill('o');
    intervals[hourHand] = 'h';
    intervals[minuteHand] = minuteHand === hourHand ? 'x' : 'm';

    process.stdout.write(
`        ${intervals[0]}
    ${intervals[11]}       ${intervals[1]}

 ${intervals[10]}             ${intervals[2]}

${intervals[9]}               ${intervals[3]}

 ${intervals[8]}             ${intervals[4]}

    ${intervals[7]}       ${intervals[5]}
        ${intervals[6]}\n\r`);
    rl.close();
});
