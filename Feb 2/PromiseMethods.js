const Promise1=function (value) {
    return new Promise((resolve, reject) => {
        if(value==0)
        resolve("Success")
        else
        reject("Unsuccess")
    })
}
const Promise2=function (value) {
    return new Promise((resolve, reject) => {
        if(value==0){
          setTimeout(()=>resolve("success"),4000);
        }
        
        else
        reject("Unsuccess")
    })
}
const Promise3=function (value) {
    return new Promise((resolve, reject) => {
        if(value==0)
        resolve("Success")
        else
        reject("Unsuccess")
    })
}
const promises=[Promise1(0),Promise2(0),Promise3(0)]
//console.log(Promise.all(promises));
// const finish=Promise.all(promises)//all elements in array gets resolve it prints if any one rejected it shows error
// finish.then((data)=>console.log(data))
// const finish=Promise.any(promises)//any one sucess it prints success
// .then(data=>console.log(data))
// const finish=Promise.allSettled(promises)//wait for all promise to settle
// .then(data=>console.log(data))
const finish=Promise.race(promises)//prints which wins in the race
.then(data=>console.log(data))