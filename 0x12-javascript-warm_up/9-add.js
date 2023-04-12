#!/usr/bin/node
// Define the add function
// Perform the addition
// Print the output
// Get the command line arguments
// Parse the first argument as an integer
// Parse the second argument as an integer
// Call the add function with the parsed arguments

const add = (a, b) => {
  const sum = a + b;
  console.log('The sum is:', sum);
};
const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);
console.log(add(arg1, arg2));
