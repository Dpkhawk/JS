// const obj1={
//     name:"Deepak.periyasamy",
//     password:"deepak"
// }
// const obj2={
//     e_mail:"deepak.periyasamy@aspiresys.com"
// }

// const obj3={name:"Deepak",...obj1,...obj2};
// console.log(obj3)

// const obj1={
//     name:"Deepak.periyasamy",
//     password:"deepak"
// }
// const obj2={
//     e_mail:"deepak.periyasamy@aspiresys.com"
// }

// const obj3={name:"Deepak",...obj1,...obj2,hobbies:["cricket","music","playing"]};
// //console.log(obj3)

// const {name,hobbies}=obj3;
// console.log(name,hobbies)
// const [cricket]=hobbies;
// console.log(cricket);

// const array1=[
//     {
//       name:"Deepak.periyasamy",
//        password:"deepak",

//     },{
//         name:"yogesh.thenrajan",
//         password:"yogesh"
//     },{
//         name:"asfaq.mohammed",
//         password:"asfa"
//     }
// ]

// array1.map((element,index)=>console.log(element .name  ,element.password    ));

const array2=[1,2,3,4,5,6,7,8,9,10]
const val=array2.reduce((accum,cuurent)=>accum+cuurent);
console.log(val);