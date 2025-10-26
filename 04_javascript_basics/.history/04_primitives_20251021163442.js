let score = 235;
console.log(typeof score); // &number

let userName = "Charlie";
console.log(typeof userName); // &string

let isMember = true;
console.log(typeof isMember); // &boolean

let newScore = new Number(500);
console.log(typeof newScore); // &object    
console.log(newScore); // &[Number: 500]
console.log(newScore.valueOf()); // &500
console.log(newScore instanceof Number); // &true

let user = new String("Delta");
console.log(typeof user); // &object    
console.log(user); // &[String: 'Delta']
console.log(user.valueOf()); // &'Delta'
console.log(user instanceof String); // &true

let isActive = new Boolean(false);
console.log(typeof isActive); // &object    
console.log(isActive); // &[Boolean: false]
console.log(isActive.valueOf()); // &false
console.log(isActive instanceof Boolean); // &true  
// &null
let emptyValue = null;
console.log(typeof emptyValue); // &object
console.log(emptyValue); // &null
// &undefined
let notDefined;
console.log(typeof notDefined); // &undefined  

//?String
let greeting = "hello world";
console.log(greeting);
let myName = "Anjali Patel";
greeting = `Hello, ${myName}! Welcome to the platform.`;
console.log(greeting);