#!/usr/bin/node
// Script to print message based on number of arguments passed
// Check the number of arguments passed
// Excluding the first two arguments (node and script filename)
// Print message based on number of arguments

const args = process.argv.slice(2);
const numArgs = args.length;

if (numArgs === 0) {
  console.log('No argument');
} else if (numArgs === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
