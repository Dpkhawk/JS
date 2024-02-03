const cars=["Audi","BMW","Swift","Jaguar","Rolls Royce"]
const newCars=[]
for(let index=0;index<cars.length;index++){
    newCars[index]=cars[index];
}
console.log(newCars);
cars.map(car=>console.log(car));
cars.filter(car=>console.log(car));