//?closures
function outer(){
    let count = 4;
    function inner(){
        count++;
        return count;
    }
    return inner;
}
let func = outer();
console.log(func());
console.log(func());
console.log(func());