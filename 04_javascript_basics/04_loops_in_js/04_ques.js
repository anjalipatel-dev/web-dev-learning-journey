//?Write a for-of loop which iterates over an array of strings named fruits and skip fruit "Apple", log other fruits to the console.
let fruits = ['Banana', 'Apple', 'Mango', 'Orange', 'Pineapple'];
for (let fruit of fruits) {
  if (fruit === "Apple") {
    continue;
  }
  console.log(fruit);
}