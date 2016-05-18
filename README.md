# Asciiclockface

[![Build Status](https://snap-ci.com/danmutton/asciiclockface/branch/master/build_image)](https://snap-ci.com/danmutton/asciiclockface/branch/master)

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
- Plugin system for rendering clocks
- Continuous clock
- Emoji Clock
- Docker container for the clock as a microservice startup we're leaving ThoughtWorks to start.

# The challengers
[Ryan "Future Perfect" Boucher](https://github.com/distributedlife)

[Dan "Past Participle" Mutton](https://github.com/danmutton)
