function throwError(msg:string):never {
    throw new Error(msg);
}
// throwError("This is an error");

function infiniteLoop():never {
    while(true){}
}
//infiniteLoop();

let x:never;

function neverReturns() : never {
    while (true) {console.log("true")}
}

x=neverReturns();