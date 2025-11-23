class Vehicle{
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }
    start(){
        return`the ${model} was started in ${year}`;
    }
}
class Car extends Vehicle{
    drive(driver){
        return `The ${driver} drives ${this.model} since ${this.year}`;
    }
}
myVehicle = new Car("Toyota","Model V",1990);
console.log(myVehicle.drive("Sam"));