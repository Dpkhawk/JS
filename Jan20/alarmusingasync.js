const btn=document.querySelector("button");
const inp=document.querySelector("input");
const para=document.createElement("p");
btn.addEventListener("click",display)
function alarm(Inputvalue){
  return new Promise((resolve, reject) => {
    if (Inputvalue>0) {
        resolve("Wake up");
    }
    else{
        reject("Error");
    }
  })
}
async function display(){
    try{
    const message=await alarm(inp.value);
    para.textContent=message
    setInterval(() => {
        document.body.append(para);
    }, inp.value);
}
catch(message){
    para.textContent=message;
}

}