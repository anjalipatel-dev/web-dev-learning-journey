//? Create a teaMaker function which returns anothe function which takes parameter as teaType, give the teaType as "Green Tea".
function teaMaker() {
    let fevTea = "Masala Tea";
    return function(teaType) {
        return `Here is your ${teaType} along with my favorite ${fevTea}`;//closure
    };
}
const makeGreenTea = teaMaker();
console.log(makeGreenTea("Green Tea"));