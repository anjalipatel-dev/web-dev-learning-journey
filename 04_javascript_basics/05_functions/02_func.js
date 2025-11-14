//? create a function named orderedTea that takes one parameter, teaType, inside this function, create another function named confirmORder that return s  message as "order confirmed for the chai, call confirm order from the "orderTea" and return the result.
function orderTea(teaType){
    function confirmOrder(){
        return `order confirmed for the ${teaType}`;
    }    return confirmOrder;
}
res = orderTea("chai");
console.log(res());