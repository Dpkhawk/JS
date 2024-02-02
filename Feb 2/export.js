const value="hi";
export default value;
const value1='bi';
export {value1};
class Person{
    constructor(name,id){
        this.name=name;
        this.id=id
    }
    static intro(){
       // console.log(`${this.name} ${this.id}`)
       console.log("Welcome");
    }
    // intro(){
    //     console.log(`${this.name} ${this.id}`)
    //     console.log("Welcome");
    //  }
}
export {Person}
