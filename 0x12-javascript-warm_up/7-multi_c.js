#!/usr/bin/node
// Get the first argument as an integer
// Print error message if argument is not a number
// Print "C is fun" x number of times

const numOccurrences = parseInt(process.argv[2]);

if (isNaN(numOccurrences)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < numOccurrences; i++) {
    console.log('C is fun');
  }
}
