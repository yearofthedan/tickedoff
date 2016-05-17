#!/usr/bin/env node

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the time ', theTime => {

    process.stdout.write(`I am a clock at ${theTime}`);
    rl.close();
});
