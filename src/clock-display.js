'use strict';

const clockFromIntervals = (intervals) =>
`        ${intervals[0]}
    ${intervals[11]}       ${intervals[1]}

 ${intervals[10]}             ${intervals[2]}

${intervals[9]}               ${intervals[3]}

 ${intervals[8]}             ${intervals[4]}

    ${intervals[7]}       ${intervals[5]}
        ${intervals[6]}`;

module.exports = clockFromIntervals;