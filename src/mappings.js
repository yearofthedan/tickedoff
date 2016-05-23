'use strict';

const MinutesPerInterval = 5;
const IntervalsOnClockFace = 12;

function mapMinuteToInterval(minutes) {
    return Math.floor(minutes / MinutesPerInterval);
}

function mapHourToInterval(hour) {
    return hour % IntervalsOnClockFace;
}

module.exports = {
  mapMinuteToInterval,
  mapHourToInterval
}