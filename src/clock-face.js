const checkInput = require('./input-validation');
const mapHourToInterval = require('./mappings').mapHourToInterval;
const mapMinuteToInterval = require('./mappings').mapMinuteToInterval;
const buildIntervals = require('./build-intervals');

const getHourFromTime = theTime => theTime.split(':')[0];
const getMinutesFromTime = theTime => theTime.split(':')[1];

function clockFace (theTime, renderer) {
    if (!checkInput(theTime)) {
        return 'Invalid time. Input must be in hh:mm format e.g. 13:30';
    }

    const hourHand = mapHourToInterval(getHourFromTime(theTime));
    const minuteHand = mapMinuteToInterval(getMinutesFromTime(theTime));
    return renderer(buildIntervals(hourHand, minuteHand));
}

module.exports = clockFace;