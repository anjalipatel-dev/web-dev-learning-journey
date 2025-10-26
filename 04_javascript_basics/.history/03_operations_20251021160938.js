let sum = 34+78;
console.log("Sum is:", sum);

let difference = 90 - 45;
console.log("Difference is:", difference);  

let product = 12 * 8;
console.log("Product is:", product);

let division = 146 / 12;
console.log("Quotient is:", division);

let remainder = 25 % 4;
console.log("Remainder is:", remainder);

let power = 3 ** 4;
console.log("Power is:", power);

let score = 50;
score++
console.log("Score after increment:", score);
score--
console.log("Score after decrement:", score);
score += 10;
console.log("Score after addition assignment:", score);
score -= 5;
console.log("Score after subtraction assignment:", score);
score *= 2;
console.log("Score after multiplication assignment:", score);
score /= 4;
console.log("Score after division assignment:", score);
score %= 7;
console.log("Score after modulus assignment:", score);
score **= 3;
console.log("Score after exponentiation assignment:", score);   
// & comparison operators
let a = 25;
let b = 40; 
console.log("Is a equal to b?", a == b);
console.log("Is a not equal to b?", a != b);
console.log("Is a greater than b?", a > b);
console.log("Is a less than b?", a < b);
console.log("Is a greater than or equal to b?", a >= b);
console.log("Is a less than or equal to b?", a <= b);
//& logical operators
let isAdult = true;
let hasID = false;
console.log("Can enter club (AND):", isAdult && hasID);
console.log("Can enter club (OR):", isAdult || hasID);
console.log("Is not adult (NOT):", !isAdult);
//& ternary operator
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote." : "No, cannot vote.";
console.log("Voting eligibility:", canVote);