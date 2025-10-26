//? check if one string is equal to another string or not.
let string1 = "hello";
let string2 = "hello";  
let string3 = "world";
if (string1 === string2) {
  console.log("first case: Both strings are equal");
} else {
  console.log(" first case: Strings are not equal");
}

if(string1 === string3) {
  console.log("second case: Both strings are equal");
} else {
  console.log(" second case: Strings are not equal");
}
//? == may perform type coercion, while === checks for both value and type equality.
