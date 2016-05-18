#!/usr/bin/env node

const readline = require('readline');
const clockFace = require('./src/clock-face');
const asciiClockDisplay = require('./src/clock-display');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the time: ', theTime => {
  process.stdout.write(`${clockFace(theTime, asciiClockDisplay)}\n\r`);
  rl.close();
});