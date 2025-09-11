type UserInfo = {
    firs:string;
    last:string;
    age:number;
}

type CardDetails = {
    cardNumber: string;
    cardType: string;
}

type UserCardInfo = UserInfo & CardDetails;

const userCard: UserCardInfo = {
    firs: "John",
    last: "Doe",
    age: 30,
    cardNumber: "1234-5678-9012-3456",
    cardType: "Visa"
};

console.log(userCard);