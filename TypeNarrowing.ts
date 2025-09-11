//Type Guards
type MyType = string | number;

function exampleFunction(value:MyType):void{
    if(typeof value === "string"){
        console.log(`String value: ${value.toUpperCase()}`);
    }else{
        console.log(`Number value: ${value.toFixed(2)}`);
    }
}

exampleFunction("hello");
exampleFunction(42);
console.log("")

//---------------------------------------------------------

// Instanceof operator Guard
class Dog{
    bark():void{
        console.log("Woof! Woof!");
    }
}

class Cat{
    meow():void{
        console.log("Meow! Meow!");
    }
}

function animalSound(animal:Dog | Cat):void{
    if(animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }
}

const myDog=new Dog();
const myCat=new Cat();
animalSound(myDog);
animalSound(myCat);
console.log("")

//---------------------------------------------------------

// Intersection Types
type Employee={
    id: number;
    name: string;
};

type Manager={
    department: string;
    role: string;
};

type ManagementEmployee= Employee & Manager;

const manager: ManagementEmployee={
    id: 1,
    name: "Alice",
    department: "Engineering",
    role: "TeamLead"
};

console.log(manager.id, manager.name, manager.department, manager.role);
console.log("")