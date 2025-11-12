//? Write a for loop that loops through the array, ["green tea", "black tea", "oolong tea","chai", "white tea", "herbal tea"] and stop when the loop reaches "chai". Store all teas before chai in new array named selectedTea.
let teas = ["green tea", "black tea", "oolong tea","chai", "white tea", "herbal tea"];
let selectedTea = [];
for(let i = 0; i<teas.length; i++){
    if(teas[i] === "chai"){
        break;
    }
    selectedTea.push(teas[i]);   
   }
console.log(selectedTea);