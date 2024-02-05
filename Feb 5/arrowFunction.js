// const display=function () {
//    console.log(arguments); 
// }
// const display=()=>console.log('arguments');
// function name(params) {
//     console.log("insi");
// }
// function name(params) {
//     console.log("outsi");
// }
// setTimeout(function (){
//     console.log("welcome");
// }, 1000);
// display("name","bass","age");
const obj={
    name:"Deepak",
   talk(){
      setTimeout(()=>{
        console.log(this.name);
      }, 1000);
   }

}
obj.talk()