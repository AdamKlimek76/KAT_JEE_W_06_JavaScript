class Vehicle{
    constructor(name){
        this.name=name;
    }

}

class Boat extends Vehicle{
    constructor(name){
        super(name);
    }

    sayHello(){
        console.log("I am boat " + this.name);
    }
}

class Car extends Vehicle{
    constructor(name){
        super(name);
    }

    sayHello(){
        console.log("I am car " + this.name);
    }
}

class Plane extends Vehicle{
    constructor(name){
        super(name);
    }

    sayHello(){
        console.log("I am plane " + this.name);
    }
}

const boat = new Boat("łódź");
boat.sayHello();
const car = new Car("auto");
car.sayHello();
const plane = new Plane("samolot");
plane.sayHello();