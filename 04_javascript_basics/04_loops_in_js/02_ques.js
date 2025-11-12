//? Write a do while loop which prompts user for a number until the user enters 404, keep storing all the numbers entered by the user in an array and finally log the array to the console.
const prompt = require('prompt-sync')();
let numbers = [];
let num;
do {
  num = prompt("Enter a number (404 to stop):");
  if (num != 404) {
    numbers.push(num);
  }
} while (num != 404);
console.log(numbers);