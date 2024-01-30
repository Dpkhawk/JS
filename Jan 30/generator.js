function* generator() {
    console.log("welcome");
    yield 10;
    console.log("Deepak");
    yield 10+10; 
}
console.log(generator().next().value);
// const gen=generator();
// console.log(gen);
//console.log(gen.next().value);//value and object
//console.log(gen.next().value);


// const exercises = [

//   { name: "Squats", duration: 30, sets: 3, reps: 10 },

//   { name: "Push-ups", duration: 20, sets: 4, reps: 8 },

//   { name: "Lunges", duration: 25, sets: 2, reps: 12 },

// ];
// let addition=0;
// for(let i=0;i<exercises.length;i++){
//    addition+=exercises[i].duration;
// }
// console.log(addition);