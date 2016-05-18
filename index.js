#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');
const clockFace = require('./src/clock-face');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let rendererName = 'ascii';
process.argv.forEach(arg => {
  const index = arg.indexOf('--renderer')
  if (index !== -1) {
    rendererName = arg.split("=")[1];
  }
});

const renderer = `./src/renderers/${rendererName}.js`
fs.exists(renderer, (exists) => {
  if (!exists) {
    process.stdout.write(`Could not find renderer ${rendererName}. Have you installed the package using "npm i ${rendererName} -S"`);
    process.exit();
  }

  rl.question('Enter the time: ', theTime => {
    process.stdout.write(`${clockFace(theTime, require(renderer))}\n\r`);
    rl.close();
  });
});
