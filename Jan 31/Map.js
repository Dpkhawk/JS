const myMap=new Map()
myMap.set('name',"deepak");
myMap.set('age',22)
console.log(myMap);
console.log(myMap.get('name'));
myMap.delete('age');
console.log(myMap);
myMap.set('value','deepak')
console.log(myMap);
const obj={}
myMap.set(obj,"Vijay")
console.log(myMap);
console.log(myMap.get(obj));
myMap.set('display',()=>console.log("displayed"))
myMap.get('display')();
myMap.set('object',{fname:'deepak kumar',age:22})
console.log(myMap.get('object').fname);
myMap.set('array',[1,2,3,4,5])
console.log(myMap.get('array')[0]);
//Set
const mySet=new Set()
mySet.add('deepak')
mySet.add('deepak')
mySet.forEach(value=>console.log(value))