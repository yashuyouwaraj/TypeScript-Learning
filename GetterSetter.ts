class MyClass{
    private _myproperty:number=0;

    get myProperty():number{
        return this._myproperty;
    }

    set myProperty(value:number){
        if(value<0){
            throw new Error("Value cannot be negative");
        }
        this._myproperty=value;
    }
}

const obj = new MyClass();

console.log(`Current Value: ${obj.myProperty}`);
obj.myProperty=10;
console.log(`Updated Value: ${obj.myProperty}`);