function Fruit(name, quantity){
    this.name = name;
    this.quantity = quantity;
    this.description = function(){
        return `I have the ${quantity} kg of ${name}.`
    }

}

let apple = new Fruit('apple', 20);
console.log(apple.description());

let kiwi = new Fruit('kiwi', 40);
console.log(kiwi.description());