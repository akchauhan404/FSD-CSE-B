const num=[10,20,30,40,50]
const[f,s,...rest]=num
const obj={name:"abc",id:2,email:'abc@gmail.com'}
const {name:newname,id,email}=obj;
console.log(newname);
console.log(id);
console.log(email);
console.log(f);
console.log(s);
console.log(rest);