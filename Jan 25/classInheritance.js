class grandFather{
    height;
    weight;
    DOB;
    skills;
    // constructor(height,weight,DOB){
    //      height=height;
    //      weight=weight;
    //      this.DOB=DOB;
    // }does not support overloading
    constructor(height,weight,DOB,skills){
        this.height=height;
        this.weight=weight;
        this.DOB=DOB;
        this.skills=skills;
   }
    displaySkills(){
        console.log(this.skills);
    }
}
class grandChildren extends grandFather{
    height;
    weight;
    DOB;
    skills;
    constructor(height,weight,DOB,skills,age){
        console.log("Inside Constructor");
          super(height,weight,DOB,skills);
          this.height=height;
          this.weight=weight;
          this.DOB=DOB;
          this.skills=skills;
          this.age=age
    }
    displayAge(){
        console.log(this.age);
    }
}
const Ramu=new grandFather(130,50,"25-01-1947",["Farming","Dancing","Singing"])
Ramu.displaySkills();
//Ramu.displayAge();
console.log(Ramu.DOB);
const Antony=new grandChildren(150,30,"12-12-2001",["Athlete","Farming"],12)
console.log(Antony.height);
console.log(Antony.skills[0]);
//console.log(Antony.age);
Antony.displayAge();
Antony.displaySkills();