const numbers=[1,2,3,4,5]
console.log(numbers.pop());//modifies original array pops the last item
numbers.push(6)
console.log(numbers);//push into original array at last
console.log(numbers.shift());//remove the first item in the  array
numbers.unshift(11);
console.log(numbers);//includes into original array first index