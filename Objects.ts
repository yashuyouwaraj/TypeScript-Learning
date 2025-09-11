const person: {firstName: string ; lastName: string; age: number}={
    firstName: "John",
    lastName: "Doe",
    age: 30
}

console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`)

//---------------------------------------------------------

function printUser(): {name: string; age:number ; location: string} {
    return {name: "Alice", age: 25, location: "New York"}
}
const res=printUser()
console.log(res)