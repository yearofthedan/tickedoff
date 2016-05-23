# Asciiclockface

[![Build Status](https://snap-ci.com/danmutton/tickedoff/branch/master/build_image)](https://snap-ci.com/danmutton/tickedoff/branch/master)

# Installation

To clone this repository and install the dependencies. Try the following:

```shell
git clone https://github.com/yearofthedan/tickedoff.git
cd tickedoff
./go.sh
```

# Usage
There is more than one way to get the sweet clock face. All of the following commands have the same result. Each will ask you for the time from standard in.

* `./go.sh` - installs, runs the tests and then starts the clock
* `npm start` - starts the clock using npm
* `node index.js` - Run the clock script directly
* `./index.js` - Run the clock script directly and hope your system can find node.

These will all use the default ASCII renderer. [How to change the default renderer](#changing-the-renderer)

## Displaying the system time.
On unix systems you can pass the system time to *tickedoff*. You can use any of the commands above.

```shell
date +"%H:%M" | ./go.sh
date +"%H:%M" | npm start
date +"%H:%M" | node index.js
date +"%H:%M" | ./index.js
```

The command `date +"%H:%M"` gets the current system time and _pipes_ it to *tickedoff*.


##Changing the Renderer
It's also possible to change the default renderer, and to create your own. The `./go.sh` script doesn't support custom renderers but the other three methods do.

With user supplied input:

```shell
npm start -- --renderer=clockface-pocketascii
node index.js --renderer=clockface-pocketascii
./index.js --renderer=clockface-pocketascii
```

Using the system time.

```shell
date +"%H:%M" | npm start -- --renderer=clockface-emojilunar
date +"%H:%M" | node index.js --renderer=clockface-emojilunar
date +"%H:%M" | ./index.js --renderer=clockface-emojilunar
```

### Known renderers

* [clockface-ascii]
* [clockface-pocket]
* [clockface-emojilunar]

You may be able to find more renderers by searching [npm](https://www.npmjs.com/search?q=clockface).

### Creating your own renderer
Renderers are npm-packages that use our very relaxed API. You're package should expose a single function that receives an array of 12 entries. Those entries will be one of `o, h` or `m`. Each entry corresponds to an interval on the clock starting at 12 and moving clockwise to through to 11. Your package has to be published and installed before *tickedoff* can find it.

The ascii renderer looks like this:

```javascript
const clockFromIntervals = (i) =>
`        ${i[0]}
    ${i[11]}       ${i[1]}

 ${i[10]}             ${i[2]}

${i[9]}               ${i[3]}

 ${i[8]}             ${i[4]}

    ${i[7]}       ${i[5]}
        ${i[6]}`;

module.exports = clockFromIntervals;
```

If you create a renderer, update this page and send us a PR and we'll include it.


# The challenge
In which, our heroes attempt a challenge such that an analogue clock face emerges from the mist.

- The time is supplied on stdin in the format hh:mm, followed by a single newline. Both hh and mm are padded with a leading 0 (zero) if they are less than 10.
- The analogue clock face representing that time, subject to the following rules, should be written on stdout.
- Each hour mark should be drawn with 'o' (Lower-case O).
- The hour mark representing the hour given in the input should be drawn with an 'h'.
- The hour mark representing the minute given in the input should be drawn with an 'm'.
- If the hour and the minute both fall on the same mark, then you should draw it with an 'x'.
- You should round down the minutes past the hour to the nearest 5 for the purposes of marking it on the clock (so 23 becomes 20, 39 becomes 35).


# Stretch Targets
- AWS Lambda clock for the _serverless μ-services as a service_ startup we're leaving ThoughtWorks to start


# The challengers
[Ryan "Future Perfect" Boucher](https://github.com/distributedlife)

[Dan "Past Participle" Mutton](https://github.com/danmutton)
