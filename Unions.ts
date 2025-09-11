let password: string | number =20;
console.log(password);

type UserInfo={
    first:string;
    last:string;
    age:number;
}

type CardDetails={
    email: string;
    password: string;
}

let user: UserInfo | CardDetails = {
    first: "John",
    last: "Doe",
    age: 30
};

console.log(user);

const items: (string | number)[] = [1, "Two", 3, "Four", 5];
console.log(items);