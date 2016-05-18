const readline = require('readline');
const checkInput = require('./input-validation');
const mapHourToInterval = require('./time-to-interval-mapping').mapHourToInterval;
const mapMinuteToInterval = require('./time-to-interval-mapping').mapMinuteToInterval
const clockFromIntervals = require('./clock-display');
const buildIntervals = require('./build-intervals');

const getHourFromTime = theTime => theTime.split(':')[0];
const getMinutesFromTime = theTime => theTime.split(':')[1];

function display(message) {
    process.stdout.write(`${message}\n\r`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function asciiClockFace () {
    rl.question('Enter the time: ', theTime => {
        if (!checkInput(theTime)) {
            display('Invalid time. Input must be in hh:mm format e.g. 13:30');
        } else {
            const hourHand = mapHourToInterval(getHourFromTime(theTime));
            const minuteHand = mapMinuteToInterval(getMinutesFromTime(theTime));
            display(clockFromIntervals(buildIntervals(hourHand, minuteHand)));
        }

        rl.close();
    });
}

module.exports = asciiClockFace;