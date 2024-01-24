var x=1
{
    console.log(x);//1
    var x=2;
    console.log(x);//2
}
console.log(x);
let y=1
{
    //console.log(y);//not defined
    let y=2;
    console.log(y);
}
console.log(y);
const z=1
{
    const z=2;
    console.log(z);
}
console.log(z);
var a=10
{
  let a=15;
  console.log(a);
}
console.log(a);//let is in child scope to var
// let b=20
// {
//     var b=25;
//     console.log(b);
// }
// console.log(b);//error var is in global scope and let also in global scope
