const btn=document.querySelector("#btn");
btn.addEventListener("click",updateName);
function updateName(){
    const name=prompt("what is your name?");
    alert(`welcome ${name}`);
    const p=document.createElement("p");
    p.textContent=name;
    document.body.append(p);
}