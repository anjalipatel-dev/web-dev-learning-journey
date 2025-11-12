//? write a forEach loop that iterates over an array named teaTypes, stop the loop when 'chai' is found, store all the prev teatype in array named available teatypes
let teaTypes = ["green tea", "black tea", "oolong tea","chai", "white tea", "herbal tea"];
let availableTeaTypes = [];
let foundChai = false;
teaTypes.forEach(function(tea) {
    if (tea === "chai") {
        foundChai = true;
        return;
    }
    if (foundChai) return;
    availableTeaTypes.push(tea);
});
console.log(availableTeaTypes);