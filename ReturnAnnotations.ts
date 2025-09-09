//Regular Func
function double1(x:number): number{
    return x*x
}

const res=double1(5)
console.log(res)

//Arrow Func
const double2 = (x:number):number => x*x
console.log(double2(5))