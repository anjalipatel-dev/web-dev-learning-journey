//?Write an arrow function named ' calculateTotal' that takes two parameters, 'price' and 'quantity'. The function should return the totl cost by multiplying the price and qunatity. Store the result in a variable named totalCost.
const calculateTotal = (price, quantity) => {
    const totalCost = price * quantity;
    return totalCost;
}
const Cost = calculateTotal(50, 3);
console.log(Cost);