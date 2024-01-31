const numbers=[1,2,3,4,5]
const odds  = numbers.map(v => v + 1)
const pairs = numbers.map(v => ({evens:v,odds:v+1}))
const nums  = numbers.map((v, i) => v + i)
// console.log(pairs);
for(let i=0;i<pairs.length;i++){
    console.log(pairs[i]);
    for(const values in pairs[i]){
        console.log(`${values} ${pairs[i][values]}`);
    }
}

// // function func(x,y=3,z=4){
// //     return x+y+z;
// // }
// // console.log(func(7,8,9));

// var params = [ "hello", true, 7 ]
// var other = [ 1, 2, ...params,"deepak","kumar" ] 

// function f (x, y, ...a) {
//     return (x + y) * a.length
// }
// f(1, 2, ...other)
// console.log(other);//print with array  [ 1, 2, 'hello', true, 7, 'deepak', 'kumar' ]
// console.log(...other);//print without array 1 2 'hello' true 7 'deepak' 'kumar' 
// var str = "foo"
// var chars = [ ...str ]
// console.log(chars);

function name(params) {
    return 2;
    console.log("hello");
}
const func=name()
console.log(func);
console.log('Welcome');