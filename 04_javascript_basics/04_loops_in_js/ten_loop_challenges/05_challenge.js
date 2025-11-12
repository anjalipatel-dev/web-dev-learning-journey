//? write a for-of loop iterate over teaType array until it get teaType length >10
let teaType = ["green tea", "black tea", "oolong tea","chai", "white-masala tea", "herbal tea"];
let resultTeaTypes = [];  
for(let tea of teaType){
    if(tea.length > 10){
        break;
    }   
    resultTeaTypes.push(tea);
}
console.log(resultTeaTypes);