#!/usr/bin/node
// Script to print first argument as integer or "Not a number"
// Get the first argument
// Convert the argument to an integer
// Check if the argument can be converted to an integer
// If yes, print the converted integer
// If no, print "Not a number"

const arg = process.argv[2];
const num = parseInt(arg);
if (!isNaN(num)) {
  console.log('My number: ' + num);
} else {
  console.log('Not a number');
}
