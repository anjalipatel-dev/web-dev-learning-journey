console.log("1"+1);
console.log("5"-2);
console.log("10"*3);
console.log("20"/4);
console.log(1+"1"); 
console.log(5-"2");
console.log(10* "3");
console.log(20/ "4");
let myVal="2abc"   ;
console.log(Number(myVal)); // &NaN
console.log(myVal-0); // &NaN
console.log(typeof(NaN)); // &number
console.log(true + 1); // &2
console.log(false + 1); // &1
console.log(true + true); // &2
console.log(false + false); // &0
console.log("5" + true); // &5true
console.log(true+"5"); // &true5
console.log("5" - true); // &4      
//? js defines the type coercion rules to convert the operands to a common type before performing the operation.
//? In addition to the arithmetic operations shown above, type coercion also occurs in other scenarios, such as when using comparison operators or logical operators.
console.log("10" > 5); // &true