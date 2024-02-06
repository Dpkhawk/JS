
// const promise1=new Promise((resolve,reject)=>

// {

//     setTimeout(()=>

//     {

//         resolve(10)

//     },5000)

// })
// .then(data=>console.log(data))

// const promise2=new Promise((resolve,reject)=>

// {

//     setTimeout(()=>

//     {

//         resolve(20)

//     },3000)

// })

// console.log(promise1+promise2);

// Promise.all([promise1,promise2]).then((values)=>

// {

//     console.log(values);

//     const val1=values[0];

//     const val2=values[1];

//     const sum=val1+val2;

//     console.log(sum);

// });

// const details={
//     name:"deepak",
//     age:21
// }
// for(let [keys,values] in Object.entries(details)){
//     console.log(keys,values);
// }
// for(let keys in details){
//     console.log(keys,details[keys]);
// }
// const arr=[1,2,3,4]
// for(let k in arr){
//     console.log(arr[k]);
// }

class person{
    constructor(name){
        this.name=name;
        // this.age=age;
    }
    greet=()=>{
       console.log(`${this.name}`);
    }
}
const obj1=new person("deepak");
obj1.greet();

const dr='Hi greetings';
const arr=dr.split(" ")