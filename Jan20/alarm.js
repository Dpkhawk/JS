const btn=document.querySelector("button");
const inp=document.querySelector("input");
const para=document.createElement("p");
btn.addEventListener("click",display);
const Inputvalue=inp.value;
function display(){
    //alert(Inputvalue);
    // para.textContent=Inputvalue;
    // document.body.append(para);
    alarm(Inputvalue)
     .then((message)=>para.textContent=message)
    .catch((error)=>para.textContent=error);
    setTimeout(()=>document.body.append(para),Inputvalue);
     
    // document.body.append(para);
}
function alarm(Inputvalue) {
    return new Promise((resolve, reject) => {
        if(Inputvalue>0){
            resolve("Wake up")
        }
        else
        reject("Error enter valid input");
    })
}
