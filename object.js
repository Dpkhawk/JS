const obj1={
    fname:"deepak",
    age:21,
    greet:(fname)=>{
       console.log(`welcome ${fname}`);
    },
    fruit:["apple","orange","banana","grapes","strawberry"]
}
obj1.greet(obj1.fname);
console.log(obj1.fruit[2]);
function createPerson(name) {

  const obj = {};

  obj.name = name;

  obj.introduceSelf = function () {

    console.log(`Hi! I'm ${this.name}.`);

  };

  return obj;

}
const vijay=createPerson("Deepak");
vijay.introduceSelf()


