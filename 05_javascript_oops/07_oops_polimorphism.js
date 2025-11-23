class Bird{
    fly(){
        console.log("Bird is flying");
    }
}
class Sparrow extends Bird{
    fly(){
        console.log("Sparrow is flying");
    }
}
class Eagle extends Bird{
    fly(){
        console.log("Eagle is flying");
    }       
}
let bird = new Bird();
let sparrow = new Sparrow();
let eagle = new Eagle();
bird.fly();
sparrow.fly();
eagle.fly();