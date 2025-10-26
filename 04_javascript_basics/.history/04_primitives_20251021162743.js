let score = 235;
console.log(typeof score); // &number

let userName = "Charlie";
console.log(typeof userName); // &string

let isMember = true;
console.log(typeof isMember); // &boolean

let newScore = new Number(500);
console.log(typeof newScore); // &object    
console.log(newScore); // &[Number: 500]
console.log(newScore instanceof Number); // &true