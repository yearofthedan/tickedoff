#!/bin/bash

echo "Checking for Node version 6.x"
node --version | grep "6\.\d\.\d"
if [[ $? != 0 ]] ; then
    echo "Missing Node running at least version 6.x"
    exit 1
fi


echo "Checking for NPM"
npm --version | grep "^\d"
if [[ $? != 0 ]] ; then
    echo "Missing npm. Please install it, see: https://docs.npmjs.com/getting-started/installing-node"
    exit 1
fi


echo "Installing dependencies"
npm i


echo "Running tests"
npm test
if [[ $? != 0 ]] ; then
    exit 1
fi

echo "Clocking on..."
npm start