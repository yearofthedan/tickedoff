const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const checkInput = require('./input-validation');
const mapHourToInterval = require('./time-to-interval-mapping').mapHourToInterval;
const mapMinuteToInterval = require('./time-to-interval-mapping').mapMinuteToInterval
const clockFromIntervals = require('./clock-display');
const getHourFromTime = theTime => theTime.split(':')[0];
const getMinutesFromTime = theTime => theTime.split(':')[1];

function buildIntervals(hourHand, minuteHand) {
    const intervals = new Array(12).fill('o');
    intervals[hourHand] = 'h';
    intervals[minuteHand] = minuteHand === hourHand ? 'x' : 'm';
    return intervals;
}

function writeOut(message) {
    process.stdout.write(`${message}\n\r`);
}

function asciiClockFace () {
    rl.question('Enter the time: ', theTime => {
        if (!checkInput(theTime)) {
            writeOut('Invalid time. Input must be in hh:mm format e.g. 13:30');
        }

        const hourHand = mapHourToInterval(getHourFromTime(theTime));
        const minuteHand = mapMinuteToInterval(getMinutesFromTime(theTime));

        writeOut(clockFromIntervals(buildIntervals(hourHand, minuteHand)));

        rl.close();
    });
}

module.exports = asciiClockFace;