class myDetails{
    name;
    constructor(name,age){
       this.name=name,
       this.age=age
    }
    introduction(){
       console.log(`My name is ${this.name} and I'm ${this.age} `);
    }

}
const student=new myDetails("Deepak",22)
student.name="kumar";
console.log(student.name);
student.introduction();