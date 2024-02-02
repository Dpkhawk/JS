const pi=3.01;
console.log(Math.floor(pi));//rounds down
console.log(Math.ceil(pi));//rounds up
console.log(Math.trunc(pi));//remove decimal values after .
const pi1=-3.14;
console.log(Math.floor(pi1));
console.log(Math.ceil(pi1));
console.log(Math.trunc(pi1));
const array=["Deepak","kumar","JS","Aspire"]
const array2=array.splice(0,2,"acer")
console.log(array);
console.log(array2);
const array3=array.slice(0,1)
console.log(array3);
console.log(array);
const str="I'm Deepak from Aspire"
const str1=str.slice(0,1)
console.log(str1);
console.log(str);
const array0=Array.from('foo')
console.log(array0[0]);