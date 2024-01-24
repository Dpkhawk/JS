var x=1;
if(x==1){
    var z=4;
function outside(){
    var y=2;
    console.log(x);
    console.log(y);
    if(x==1){
        
        console.log("Inside if");
        console.log(x);
        console.log(y);
    }
    function inside() {
        console.log("Inside Function");
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inside()
}
outside()
}
console.log("Outside of Functions");
console.log(x);
console.log(z);//z is not defined if present inside of function
console.log(y);//reference error because of inside function scope

