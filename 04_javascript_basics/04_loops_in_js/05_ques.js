//?Write a for-in loop which iterates over an array of strings named fruits and skip fruit "Apple", log other fruits to the console.    
let fruits = ['Banana', 'Apple', 'Mango', 'Orange', 'Pineapple'];
for (let index in fruits) {
  if (fruits[index] === "Apple") {
    continue;
  }
  console.log(fruits[index]);
}