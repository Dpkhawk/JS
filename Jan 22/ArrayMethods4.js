const numbers=[1,2,3,4,5];
numbers.map(number=>console.log(number));
numbers.filter(number=>console.log(number));
const mappedNumbers=numbers.map(number=>number*2);
console.log(mappedNumbers);
const initialValue=2;
const newNumbers=[1,2,3,4]
const reducedNumber=newNumbers.reduce((accumalator,value)=>accumalator+value,initialValue)
console.log(reducedNumber);
