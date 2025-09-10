//1st type of array declaration
const nums: number[]= [1,2,3,4,5]
console.log(nums)
const str: string[]=["One","Two","Three"]
console.log(str)
const anything: any[]=[1,"Two",true,{hello:'world'},[4,5]]
console.log(anything)

const numList:number[]=[];
numList.push(20)
numList.push(30)
console.log(numList)

//2nd type of array declaration
const items: Array<number>=[1,2,3,4,5]
console.log(items)