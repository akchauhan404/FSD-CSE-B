import {add,mul} from "../JS/jsdemo1.js"
console.log('sum=', add(30,50))
console.log('product=',mul(5,10))

const num=[1,2,3,4,5,6,7,8,9];
const even=num.filter((n)=>(n%2===0))
           .map((n)=>(n*n))
           .reduce((n,count)=>(n+count),0)
console.log(even);