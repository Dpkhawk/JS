const objectPractise1={
    name:"Deepak",
    age:22,
    native:"Karur",
    education:["KSV","KSV","BIT"],
    printThis:function(){
        console.log(this);
    },
    printThisArrow:()=>{
        console.log(this);
    },
    schools:function (){
        console.log(`10th-${this.education[0]},12th-${this.education[1]}`);
    }
}
objectPractise1.printThis()
objectPractise1.printThisArrow()
objectPractise1.schools()
console.log(objectPractise1.education[2]);
// console.log(objectPractise1.);
console.log(Object.getPrototypeOf(objectPractise1));

