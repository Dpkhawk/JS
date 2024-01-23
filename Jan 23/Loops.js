const names=["Deepak","kumar","Ragu","Koshi"]
const numbers=[1,2,3,4,5]
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}
let element=0;
for (let index = 0; index < numbers.length; index++) {
    element+=numbers[index];   
}
console.log(element);
for(const name of names){
    console.log(name);
}
for(const number of numbers){
    let element=0;
    element+=number
    
}
console.log(element);
names.forEach(name=>console.log(name));
var addition=0;
numbers.forEach((number,addition)=>{
    addition+=number;
    console.log(addition);
});
console.log(addition);
