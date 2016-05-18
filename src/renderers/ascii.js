'use strict';

const clockFromIntervals = (i) =>
`        ${i[0]}
    ${i[11]}       ${i[1]}

 ${i[10]}             ${i[2]}

${i[9]}               ${i[3]}

 ${i[8]}             ${i[4]}

    ${i[7]}       ${i[5]}
        ${i[6]}`;

module.exports = clockFromIntervals;