const obj1={
    name:"Deepak",
    age:22,
    native:'Karur'
}
console.log(Object.keys(obj1));
Object.freeze(obj1)
console.log(Object.isFrozen(obj1));
//console.log(Object.hasOwn(obj1,'age'));
const obj2={}
//console.log(Object.getPrototypeOf(obj2));
Object.setPrototypeOf(obj2,obj1)
console.log(obj2.name);