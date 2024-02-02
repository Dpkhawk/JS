import values,{value1,arr} from "./export.js";
console.log(values);
console.log(value1);
//Person.intro()
//const obj1=new Person("Deepak",12)
// obj1.intro()
class Emp extends Person{
    constructor(name,id,age){
        super(name,id)
        this.age=age;
    }
    // intro(){
    //     console.log(`${this.name}`);
    // }
    static intro(){
        // console.log(`${this.name}`);
        super.intro()
    }
}
// const obj2=new Emp("kumar",13,22);
//obj2.intro()
Emp.intro()
console.log(arr[0]);