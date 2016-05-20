#!/usr/bin/env node
'use strict';
const readline = require('readline');
const fs = require('fs');
const clockFace = require('./src/clock-face');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let rendererName = 'clockface-ascii';
process.argv.forEach(arg => {
  const index = arg.indexOf('--renderer')
  if (index !== -1) {
    rendererName = arg.split("=")[1];
  }
});

try {
  require.resolve(rendererName);
} catch (e) {
  console.error(`Could not find renderer ${rendererName}. Have you installed the package using "npm i ${rendererName} -S"`);
  process.exit(1);
}

rl.question('Enter the time: ', theTime => {
  process.stdout.write(`${clockFace(theTime, require(rendererName))}\n\r`);
  rl.close();
});
