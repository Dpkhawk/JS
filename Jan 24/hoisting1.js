let x=1;
// function outside(){
//     let y=2;
//     console.log(x);
// }
if(x==1){
    let y=2;//do
}
if(x==1){
    var z=3;
}
console.log(z);//block scope print values inside if block
console.log(y);//doesn't print the value inside the if block
outside()
//both doesn't print the values in function scope