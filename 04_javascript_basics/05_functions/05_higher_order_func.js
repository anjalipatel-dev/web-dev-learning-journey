//? create a function named process tea, which takes another function "makeTea" as parapmeter inside which there is an argument "masalaTea".
function processTea(makeTea){
    return makeTea("Masala Tea");
}
function makeTea(teaType){
    return `take your ${teaType}`;
}
//? call the function processTea with makeTea as argument and log the result
console.log(processTea(makeTea));
