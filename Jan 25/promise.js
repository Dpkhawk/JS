const promise=()=>{
    return new Promise((resolve, reject) => {
        let value=0;
        if(value!==0){
            resolve("Successful")
        }
        else{
            reject("Unsuccessful")
        }
    })
}
promise()
.then((message)=>console.log(message))
.catch((message)=>console.log(message));