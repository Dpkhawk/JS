try{
    var x=1;
    if(x==2)
    console.log(x);
    else 
    throw new Error("Wrong number");;
}
catch(error){
    console.error(error);
}
finally{
    console.log("Inside Finally");
}