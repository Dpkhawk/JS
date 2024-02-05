
const obj1={
    name:"Deepak",
    age:12,
    native:["karur","chennai","Erode"]
}
for(let [key,value] of Object.entries(obj1)){
    console.log(key);
    console.log(value);
}
const obj={}
const obj2={
    name:"Kumar",
    age:55,
    // display
}
Object.assign(obj,obj1,obj2)
console.log(obj);
const obj4=Object.create(obj2)

function display() {
    console.log('this.name');
}
function display() {
    console.log('this.age');
}
 //display.bind(obj2)()
 display()
 for(let key in obj2){
    console.log(key);
 }

 const arr=['deepak','deepak','kumar','karur']
 const set=new Set();
 set.add(arr[0]);
 set.add(arr[1]);
 set.add(arr[2]);
 set.add(arr[3]);
//set.add(arr)
 console.log(set);
 for(let value of set){
    console.log(value);
 }