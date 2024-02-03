const fname=document.querySelector("#name");
fname.addEventListener("change",display)
const car=document.querySelector("#car");
car.addEventListener("change",display);
function display(){
    const fnames=fname.innerHTML;
    const fcars=car.value;
    alert(`${fnames},${fcars}`);
}
console.log('Welcome');