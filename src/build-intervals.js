function buildIntervals(hourHand, minuteHand) {
    const intervals = new Array(12).fill('o');
    intervals[hourHand] = 'h';
    intervals[minuteHand] = minuteHand === hourHand ? 'x' : 'm';
    return intervals;
}

module.exports = buildIntervals;