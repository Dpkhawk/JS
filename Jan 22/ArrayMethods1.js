const numbers=[1,2,3,4,5]
console.log("Before Splice");
numbers.forEach((element,index,array)=>console.log(element,index,array));
console.log("After Splice");
 const splicedNumber=numbers.splice(4);
 console.log(splicedNumber);
 numbers.forEach((element,index,array)=>console.log(element,index,array));
 console.log("Sliced Number");
 const slicedNumber=numbers.slice(1,4);
 console.log(slicedNumber);
 numbers.forEach((element,index,array)=>console.log(element,index,array));
 //The difference between slice and splice is that the splice change the original array and splice doesn't
