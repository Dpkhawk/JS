const keyPress=document.querySelector("#name");
const displayName=document.getElementById("names")
keyPress.addEventListener("keypress",displayKey);
function displayKey(e){
    displayName.textContent=`${e.code}`;
}
// const input = document.querySelector("input");
// const log = document.getElementById("log");

// input.addEventListener("keydown", logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }
