//creates an object with obj1 with values of obj2 and obj3 and assign it to combineObj 
//and the value of obj1 and combineObj is same and duplicate values are removed and the last initialized values is assigned for that 
//duplicated values
//object.assign()
const obj1={a:1,b:2}
const obj2={b:2,c:3}
const obj3={b:6,d:8}
const combineObj=Object.assign(obj1,obj2,obj3)
console.log(obj1);
obj1.a=10;
console.log(combineObj);

//object.entries
const object1 = {
a: 'somestring',
b: 42,
};

for (const [key, value] of Object.entries(object1)) {
console.log(`${key}: ${value}`);
}
console.log(Object.entries(object1));

//object.freeze
//doesn't include or delete property
//doesn't able change the key's value
const objFreeze={
name:"deepak",
age:12
}
Object.freeze(objFreeze);
objFreeze.native='Karur'
delete objFreeze.name;

console.log(objFreeze);
objFreeze.name="Kumar"
console.log(objFreeze);

//object.seal
//doesn't include or delete property
//able to change key's value
const objSeal={
    name:"Deepak",
    age:22
}
Object.seal(objSeal)
delete objSeal.name
objSeal.native='Chennai'
console.log(objSeal);
objSeal.name="Kumar"
console.log(objSeal);

  