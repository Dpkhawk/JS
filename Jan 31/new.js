let array=[1,2,3,4,5]//case sensitive
const obj1={
    name:"deepak",
    age:22
}
delete obj1.age
console.log(obj1);
obj1.name="Keerthana";
obj1["name"]="Keerthana";
const obj2=obj1;
const obj3=Object.create(obj1);
console.log(obj3.name);
obj1.name="Abi"
console.log(obj3.name);
obj1.name="Deepak";
const obj4=Object.assign(obj1);
console.log(obj4.name);
obj1.name="Kumar";
console.log(obj4.name);
//console.log(obj5.name);//undeclared
let a,b;
console.log(a);
c=1+b;
console.log(c);//NaN
console.log(typeof(NaN));//number
console.log(typeof(null));//object
console.log(typeof(undefined));//undefined
const arr=[1,2,3,4]
let ab=arr.includes(5);
console.log(ab);
console.log("Welcome");