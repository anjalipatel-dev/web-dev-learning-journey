class CoffeeMachine{
    #takeWater(){
        console.log(`inside: taking the water`);
    }
    #takeMilkAndCoffee(){
        console.log(`inside: taking the coffee and milk`);
    }
    processCoffee(){
        this.#takeWater();
        this.#takeMilkAndCoffee();
    }
}
myMachine = new CoffeeMachine();
myMachine.processCoffee();