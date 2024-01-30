// const array1=["banana","apple","orange","watermelon"]
// const[fruit1,fruit2,...fruits]=array1;
// console.log(fruit1,fruit2,fruits);
// console.log(array1);//doesn't change the original array

// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); 
// console.log(b); 

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); 
// var list = [ 1, 2, 3 ]
// var [ a, , b ] = list
// var [ b, a ] = [ a, b ]
// console.log([b,a]);

//function f (arg) {
//     console.log(arg[0],arg[1]);
// }
// function g ({ name: n, val: v }) {
//     console.log(n, v)
// }
// function h ({ name, val }) {
//     console.log(name, val)
// }
// f([ "bar", 42 ])
// g({ name: "foo", val:  7 })
// h({ name: "bar", val: 42 })

const arr1=[1,2,3,4]
const arr2=[5,6,7,8]
const arr3=[...arr1,...arr2];
console.log(arr3);
