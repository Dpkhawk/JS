const numbers=[1,2,3,4,5];
numbers.map(number=>console.log(number));
numbers.filter(number=>console.log(number));
const mappedNumbers=numbers.map(number=>number*2);
console.log(mappedNumbers);
const initialValue=2;
const newNumbers=[1,2,3,4]
const reducedNumber=newNumbers.reduce((accumalator,value)=>accumalator+value,initialValue)
console.log(reducedNumber);
const newMap=numbers.map(n=>n>2)//returns false or true
console.log(newMap);
const newFilter=numbers.filter(n=>n*2)//returns the original array
console.log(newFilter);
