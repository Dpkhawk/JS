let str1="Deepak";
let str2='';
for (let i = 0; i < str1.length; i++) {
    for (let j = i+1; j <=str1.length; j++)
     {
        
        if(str1[i]==[str1[j]]){
            i++;
            break;
        }
        else{
            //console.log(i);
            str2+=str1[i];
           break;
        }
        
    }
    
}
console.log(str2);

// if(str1[i]=='-1'||str1[j]=='-1')
        // break;
        // //console.log(str1[j]);
        // //console.log(str1[j]);
        // if((str1[i]===str1[j])){
        //     str1[i]='-1';
        //     str1[j]='-1';
        //     break;
        // }

function name(params) {
    function names(params) {
      console.log("Inside");  
    }
    console.log("Outside");
}
name();


class BaseClass {
#privateVariable = 0;

constructor(publicVariable) {
    this.publicVariable = publicVariable;
}

#privateMethod() {
    console.log("This is a private method");
}

accessPrivateVariable() {
    return this.#privateVariable;
}

callPrivateMethod() {
    this.#privateMethod();
}
}

class DerivedClass extends BaseClass {
constructor(publicVariable, additionalVariable) {
    super(publicVariable);
    this.additionalVariable = additionalVariable;
}


accessBasePrivateVariable() {
    return this.accessPrivateVariable();
}
}

const instanceDerived = new DerivedClass(42, "additional");

console.log(instanceDerived.publicVariable); // Access public variable from base class
console.log(instanceDerived.additionalVariable); // Access variable from derived class

// The following would result in an error since the private variable is not accessible from the derived class.
// console.log(instanceDerived.#privateVariable);

// However, the derived class can access the private variable through the method provided by the base class.
console.log(instanceDerived.accessBasePrivateVariable());

// The derived class can also call methods that access private members of the base class.
instanceDerived.callPrivateMethod();



