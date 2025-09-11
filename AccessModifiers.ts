 class Human{
    private first: string;
    public last: string;
    protected age: number;

    constructor(first:string,last:string,age:number){
        this.first=first;
        this.last=last;
        this.age=age;
    }

    getName():string{
        return `I am ${this.first} ${this.last} and My Age: ${this.age}`
    }
 }

class Person extends Human{
    constructor(first:string,last:string,age:number){
        super(first,last,age)
    }
}

const yashu = new Person("Yashu","Youwaraj",25)
console.log(yashu.getName())