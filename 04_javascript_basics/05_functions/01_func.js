//?Write a function named 'makeTea' that takes one parameter 'typesOfTea' and returns the string "Here is your [typesOfTea] tea!" store the result in variable named 'teaOrder' by calling the function with argument "green"
function makeTea(typesOfTea){
    return `Here is your ${typesOfTea} tea!`;
}   

let teaOrder1 = makeTea("green");
console.log(teaOrder1);
let teaOrder2 = makeTea("black");
console.log(teaOrder2);