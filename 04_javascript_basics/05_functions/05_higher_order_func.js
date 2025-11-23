//? create a function named process tea, which takes another function "makeTea" as parapmeter inside which there is an argument "masalaTea".
function processTea(makeTea){
    return makeTea(teaType);
}
function makeTea(teaType){
    return teaType();
}
function teaType(){
    return "Here is your Masala Tea";
}
//? call the function processTea with makeTea as argument and log the result
console.log(processTea(makeTea));
