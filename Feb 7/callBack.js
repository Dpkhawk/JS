function displayCallBack(name,callBack){
    console.log(name);
    callBack(1,2)

}
function add(num1,num2){
    console.log(num1+num2);
}
displayCallBack("deepak",add)

function displayCallBack(name,add){
  console.log(name); 
  add(1,2) ;
}

displayCallBack("deepak",function (num1,num2){
           console.log(num1+num2);
})


const arr=[1,2,3,4]
var a;
// arr.forEach(element => a+=element);
// console.log(a);
arr.forEach((e,i,v)=>console.log(v[i]))

for(let val in arr){
    console.log(val);
}

let x=1;
{
    console.log(x);
    //let x=2;
}