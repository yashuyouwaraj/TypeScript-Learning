function uniqueDataType<T>(item: T, defaultValue: T): [T, T]  {
    return [item, defaultValue];
}

const num= uniqueDataType<number>(5,19)
const str= uniqueDataType<string>("Hello","World");
const bool= uniqueDataType<boolean>(true,false)

console.log(num);
console.log(str);
console.log(bool);

console.log("")

//---------------------------------------------------------

function uniqueDataTypesFunc<T>(item:T,defaultValue:T):[T,T]{
    return [item,defaultValue];
}

interface Dog{
    name:string
    breed:string
}

const dog1= uniqueDataTypesFunc<Dog>({name:"Buddy",breed:"Golden Retriever"},{name:"Max",breed:"Beagle"});
console.log(dog1);
console.log("")

//---------------------------------------------------------

function filterArray<T>(array:T[],condition: (item:T)=>boolean):T[]{
    return array.filter(condition);
}
const numbers=[1,2,3,4,5,6,7,8,9,10];
const evenNumbers= filterArray<number>(numbers,(num)=> num%2===0);
console.log(evenNumbers);
console.log("")

const stringArray=["apple","banana","avocado","grape","apricot"];
const shortWords=filterArray<string>(stringArray,(str)=> str.length<=5);
console.log(shortWords);
console.log("")

interface Fruit{
    name:string;
    color:string;
}

const fruits:Fruit[]=[
    {name:"Apple",color:"Red"},
    {name:"Banana",color:"Yellow"},
    {name:"Grapes",color:"Purple"},
    {name:"Orange",color:"Orange"},
    {name:"Strawberry",color:"Red"}
];

const redFruits= filterArray<Fruit>(fruits,(fruit)=> fruit.color==="Red");
console.log(redFruits);
console.log("")

//---------------------------------------------------------

function reversePair<T, U>(value1:T, value2:U):[U,T]{
    return [value2,value1];
}

const reversedPair=reversePair('Hello', 42);
console.log(reversedPair);
console.log("")

//---------------------------------------------------------

class Box<T>{
    private content: T;

    constructor(content:T){
        this.content=content;
    }

    getContent():T{
        return this.content;
    }

    setContent(newContent:T):void{
        this.content=newContent;
    }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getContent());
numberBox.setContent(200);
console.log(numberBox.getContent());