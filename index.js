#!/usr/bin/env node
'use strict';
const readline = require('readline');
const fs = require('fs');
const clockFace = require('./src/clock-face');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const DefaultRenderer = 'clockface-ascii';

function getRenderName () {
  let renderer = DefaultRenderer;

  process.argv.forEach(arg => {
    if (arg.indexOf('--renderer') !== -1) {
      renderer = arg.split('=')[1];
    }
  });

  return renderer;
}

try {
  require.resolve(getRenderName());
} catch (e) {
  console.error(`Could not find renderer ${getRenderName()}. Have you installed the package using "npm i ${getRenderName()} -S"`);
  process.exit(1);
}

rl.question('Enter the time: ', theTime => {
  process.stdout.write(`${clockFace(theTime, require(getRenderName()))}\n\r`);
  rl.close();
});
