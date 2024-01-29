//  let callbacks = []
// for (let i = 0; i <= 2; i++) {
//     callbacks[i] = function () {  console.log("0th index"); }
// }
// // callbacks[0]() 
// // callbacks[1]() 
// // callbacks[2]() 
// //console.log(callbacks);
// callbacks[1]()
// console.log(callbacks[1]());

function outside(one){
    console.log(`${one}`);
}

outside("one")
// function outside(one){
//     console.log(`${one} outside`);
// }
// {
//     function outside(){
//         console.log("inside");
//     }
//     outside()
//     {
//         function outside() {
//         console.log("Ins inside");}
//         outside()
//     }
 //    outside()
// }
outside("two")
// const arr1=[1,2,3,4]
// const arr2=[5,6,7,8]
// const arr3=[9,10,11,12]
// const arr4=arr1.concat(arr2,arr3);
// console.log(arr4);
// const arr5=[...arr1,...arr2,...arr3];
// console.log(arr5);

