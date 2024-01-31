
// function *generatior(){
//     yield 1;
//     console.log("Yielded");
//     yield 2;
// }
// const gen=generatior()
// console.log(gen.next().done);
// console.log(gen.return(3).done);
// console.log(gen.next().value);

function* generator(){
   let id=1;
    while(true){
        yield id;
        id++
    }
}
const gen1=generator();
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next(5).value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
const gen2=generator()
console.log(gen2.next().value);
console.log(gen1.next().value);




