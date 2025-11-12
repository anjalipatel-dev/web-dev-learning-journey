//? Write a for loop which takes element from arr numberArray, multiply each with5  and store the result another array named multipliedArray.
let numberArray = [1, 2, 3, 4, 5];
let multipliedArray = [];
for (let i = 0; i < numberArray.length; i++) {
  multipliedArray.push(numberArray[i] * 5);
}
console.log(multipliedArray);