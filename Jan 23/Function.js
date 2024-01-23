const names="kumar"
function normalFunction(){
    const name="deepak";
    console.log(arguments);
    const arrowfunction=()=>console.log(arguments);
    arrowfunction("Kumar",22,"Chennai")
}
normalFunction("deepak",21,"Karur")
const arg=()=>console.log(arguments);
arg("Kumar",22,"Chennai")