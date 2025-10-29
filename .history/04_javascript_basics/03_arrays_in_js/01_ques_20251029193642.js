/* declare an array named 'fruits' and initialize it with the following string values: 'apple', 'banana', 'cherry', 'date', 'elderberry'
access the first element */
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruits[0]);
// access the third element
console.log(fruits[2]);
//using new keyword
let vegetables = new Array('carrot', 'broccoli', 'spinach', 'potato', 'cabbage');
// access the second element
console.log(vegetables[1]);
// access the last element
console.log(vegetables[vegetables.length - 1]); 
// in fruits array, change 'banana' to 'blueberry'
fruits[1] = 'blueberry';
console.log(fruits);
// in frulits array, add 'fig' at the end using push method
fruits.push('fig');
console.log(fruits);
//in fruits array, remove the last element using pop method
fruits.pop();
console.log(fruits);
//in vegetables array, remove the first element using shift method
vegetables.shift();
console.log(vegetables);
// in vegetables array, add 'asparagus' at the beginning using unshift method
vegetables.unshift('asparagus');
console.log(vegetables);