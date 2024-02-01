class Person{
    static name;
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
   static introduction(){
        console.log(`Welcome ${this.name} ${this.id}` );
    }
}
new Person("Deepak",22);
Person.introduction()