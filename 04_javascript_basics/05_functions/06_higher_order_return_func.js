//? Create a teaMaker function which returns anothe function which takes parameter as teaType, give the teaType as "Green Tea".
function teaMaker() {
    return function(teaType) {
        return `Here is your ${teaType}`;
    };
}
const makeGreenTea = teaMaker();
console.log(makeGreenTea("Green Tea"));