#!/usr/bin/node
// Get the first argument as an integer
// Print error message if argument is not a number
// Print error message if size is not a positive integer
// Generate a row of "X" characters
// Print row x number of times to form a square

const size = parseInt(process.argv[2]);
if (isNaN(size)) {
  console.log('Missing size');
} else {
  if (size <= 0) {
    console.log('Size must be a positive integer');
  } else {
    const row = 'X'.repeat(size);
    for (let i = 0; i < size; i++) {
      console.log(row);
    }
  }
}
