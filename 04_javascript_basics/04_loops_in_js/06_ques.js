//?Write a for-each loop which iterates over an array of strings named fruits and skip fruit "Apple", log other fruits to the console.

let fruits = ['Banana', 'Apple', 'Mango', 'Orange', 'Pineapple'];
fruits.forEach(function(fruit){
    if(fruit === "Apple"){
        return;
    }
    console.log(fruit);
})