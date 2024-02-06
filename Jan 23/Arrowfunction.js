const obj1={
    firstName:"Deepak",
    age:22,
    displayDetails:()=>console.log(this.firstName),
    
}
obj1.displayDetails();
//var a=1;
// function display(){
//      var a=2;
//     console.log(a);
// }
// display()
// if(a==1){
//     console.log(a);
//      a=2;
//     console.log(a);
// }
// console.log(a);