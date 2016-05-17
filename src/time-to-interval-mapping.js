'use strict';

const minutesPerInterval = 5;
function mapMinuteToInterval(minutes) {
    return Math.floor(minutes / minutesPerInterval);
}

function mapHourToInterval(hour) {
    return hour % 12;
}

module.exports = {
  mapMinuteToInterval,
  mapHourToInterval
}