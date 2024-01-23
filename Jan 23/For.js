const obj1={
    name:"Deepak",
    age:21,
    native:"Karur"
}
for(const values in obj1){
    console.log(`${values}:${obj1[values]}`);
}
// for(const values of obj1){
//     console.log(`${values}:${obj1[values]}`);
// }