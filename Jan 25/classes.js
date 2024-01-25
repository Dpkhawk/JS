class Person{
    //name;
    constructor(name,age){
       this.name=name,
       this.age=age
    }
    introduction(){
       console.log(`${this.name}`);
    }

}
const student=new Person("Deepak",22)
student.introduction();