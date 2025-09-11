//String Literal Types

let color : "red" | "blue" | "green";
color="red";
// color='yellow'; // Error: Type '"yellow"' is not assignable to type '"red" | "blue" | "green"'.
console.log(color);

//Boolean Literal Types
let isTrue: true|false;
isTrue=true;
// isTrue="SOME";// Error: Type '"SOME"' is not assignable to type 'true | false'.
console.log(isTrue);

//Other Literal Types
let password: "secretPassword"="secretPassword";
// password="12345"; // Error: Type '"12345"' is not assignable to type '"secretPassword"'.
console.log(password)