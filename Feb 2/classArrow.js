class Person{
    constructor(name,id){
        this.name=name,
        this.id=id
    }
    // greet=()=>{
    //    //console.log(`${this.name} ${this.id}`);
    //    console.log(this);
    // }
    greet(){
        console.log(this);
    }
}
const obj1=new Person("Deepak",12)
obj1.greet()