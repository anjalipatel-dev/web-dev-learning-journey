//? use of for-of loop iterate over an number array until it get 4
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let resultArray = [];   
for(let number of numberArray){
    if(number === 4){
        break;
    }
    else{
        resultArray.push(number);
    }
}
console.log(resultArray);

