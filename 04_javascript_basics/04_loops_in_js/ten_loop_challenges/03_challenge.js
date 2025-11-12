//? use of for-in loop to iterate over an object containing population of some countries
let countryPopulation = {
    "China": 1444216107,
    "India": 1393409038,    
    "USA": 331893745,
    "Indonesia": 273523621,
    "Pakistan": 220892331,  
    "Brazil": 212821986,
    "Nigeria": 206139587,
    "Bangladesh": 164689383
};
let populations = [];
for (let country in countryPopulation) {
    populations.push(countryPopulation[country]);
}
console.log(populations);
let countryNewPopulation ={};
for(let country in countryPopulation){
    countryNewPopulation[country] = countryPopulation[country] + 1000000;   
}
console.log(countryNewPopulation);