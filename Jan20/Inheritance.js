class person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(this.name);
    }
}
class student extends person{
    constructor(name,age){
        super(name);
        this.age=age;
    }
    greet(){
        console.log(`${this.name},${this.age}`);
    }
}
const Employee1=new person("deepak");
const Employee2=new student("kumar",22);
Employee1.greet();
Employee2.greet();