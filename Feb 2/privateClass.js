class BankEmp{
    #pin=1212;
    constructor(name,DoB){
        this.name=name;
        this.DoB=DoB;
    }
   checkBalance(value){
    if(this.#pin===value){
        console.log('Available Balance :500');
    }
    else{
        console.log("Wrong Pin");
    }
   }
}
const bankHolder1=new BankEmp("Deepak","12/12/2001");

function viewMyDetails(){
    console.log(`${bankHolder1.name} ${bankHolder1.DoB} ${bankHolder1.pin}`);
}
viewMyDetails();
value=2121;
function bankBalance(){
 bankHolder1.checkBalance(value)
}
bankBalance()

// function display(...arr){
//     const a=arr;
//     console.log(a);
// }
// const arr=[1,2,3,4,5]
// b=2;
// display(arr,b)t 
const a=''
console.log(a);