class Duck{
    constructor(){
        this.type="ordinary duck";
    }

    sound(){
        console.log("Quack  quack");
    }

    swim(){
        console.log("I am swimming");
    }

    print(){
        console.log("Looks like " + this.type);
    }

    fly(){
        console.log("I am flying");
    }
}

const donaldDuck = new Duck();
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();
donaldDuck.fly();

class WildDuck extends Duck{
    constructor(){
        super();
        this.type="wild duck";
    }

}

const daffyDuck = new WildDuck("wild duck");
daffyDuck.sound();
daffyDuck.swim();
daffyDuck.print();
daffyDuck.fly();

class MallardDuck extends Duck{
    constructor(){
        super();
        this.type="mallard duck";
    }
}

const daisyDuck=new MallardDuck();
daisyDuck.sound();
daisyDuck.swim();
daisyDuck.print();
daisyDuck.fly();

class RubberDuck extends Duck{
    constructor(){
        super();
        this.type="rubber duck";
    }

    fly(){
        console.log("I cant fly");
    }
}

const howardTheDuck = new RubberDuck();
howardTheDuck.fly();
howardTheDuck.swim();
howardTheDuck.sound();
howardTheDuck.print();




