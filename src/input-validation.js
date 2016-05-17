'use strict';

module.exports = {
    checkInput: function checkInput(input) {
        const hours = String.raw`([0|1][\d]|[2][0-3])`;
        const minutes = String.raw`([0-5][\d])`;

        if (!(RegExp(`^${hours}:${minutes}$`)).test(input)) {
            throw new Error('Invalid time format');
        };
    }
}
