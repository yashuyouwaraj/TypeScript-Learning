//Interface Definition
interface Computer{
    name:string;
    ram:number;
    hdd:number;
}

const ComputerExample:Computer={
    name:"MyPC",
    ram:16,
    hdd:512
}
console.log(`Computer Name: ${ComputerExample.name}, RAM: ${ComputerExample.ram}GB, HDD: ${ComputerExample.hdd}GB`);

interface Movie {
    readonly name: string;
    ratings: number;
    genra?: string; // optional property
}

const movie1:Movie={
    name: "Inception",
    ratings: 8.8,
    genra: "Sci-Fi"
}

console.log(`Movie Name: ${movie1.name}, Ratings: ${movie1.ratings}, Genra: ${movie1.genra}`);
console.log("")

//---------------------------------------------------------

//Interface for Function
interface MathOperation{
    (x:number,y:number):number
}

const add:MathOperation=(a,b)=> a+b;
const sub:MathOperation=(a,b)=> a-b;

console.log(`Addition: ${add(5,3)}`);
console.log(`Subtraction: ${sub(5,3)}`);
console.log("")

//---------------------------------------------------------

//Interface for methods
interface Person{
    firstName:string;
    lastName:string;
    age:number;
    sayHello():void;
}

function greet(person:Person){
    console.log(`Hello, ${person.firstName} ${person.lastName}, Age: ${person.age}`);
    person.sayHello();
}

const john:Person={
    firstName: "John",
    lastName: "Doe",
    age:25,
    sayHello(){
        console.log("Hello from John!");
    }
}

const yashu:Person={
    firstName: "Yashu",
    lastName:"Youwaraj",
    age:25,
    sayHello(){
        console.log("Hello from Yashu!");
    }
}
greet(john);
greet(yashu)
console.log("")

interface Song{
    songName:string;
    singer:string;
    printSongInfo(songName:string,singer:string):string
}

const mySong:Song={
    songName:"Shape of You",
    singer:"Ed Sheeran",
    printSongInfo:(songName,singer)=>{
        return `Song: ${songName}, Singer: ${singer}`;
    }
}

console.log(mySong.printSongInfo(mySong.songName,mySong.singer));
console.log("")

//---------------------------------------------------------

//Interface extending

interface MovieDetails{
    readonly name:string;
    ratings:number;
    printMovieInfo(name:string,price:number,ratings:number):string|number;
}

interface MovieGenra extends MovieDetails{
    genra:string;
}

const movie2:MovieGenra={
    name:"Inception",
    genra:"Sci-Fi",
    ratings:8.8,
    printMovieInfo(name:string,price:number,ratings:number):string|number{
        return `Movie: ${name}, Price: $${price}, Ratings: ${ratings}`;
    }
}

const res = movie2.printMovieInfo(movie2.name,15,movie2.ratings);
console.log(res);

console.log("")
//---------------------------------------------------------

//Interfaces with Classes

interface Vechicle{
    start():void;
    stop():void;
}

class Car implements Vechicle{
    start(): void {
        console.log("Car started");
    }
    stop(): void {
        console.log("Car stopped");
    }
}

const myCar = new Car();
myCar.start();
myCar.stop();
console.log("")


//---------------------------------------------------------

//Declaration Merging(interface extension)

interface Car{
    brand:string;
    start():void;
}
interface Car{
    model:string;
    stop():void;
}

const myNewCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    start() {
        console.log("Car started");
    },
    stop() {
        console.log("Car stopped");
    }
}

console.log(`Car Brand: ${myNewCar.brand}, Model: ${myNewCar.model}`);
myNewCar.start();
myNewCar.stop();