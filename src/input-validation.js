'use strict';

function checkInput(input) {
    const hours = '([0|1][\\d]|[2][0-3])';
    const minutes  = '([0-5][\\d])';
    const validTime = new RegExp(`^${hours}:${minutes}$`);

    return validTime.test(input);
}

module.exports = checkInput;