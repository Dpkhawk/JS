const names=["Deepak","Kumar","Ravi","Buvi"];
const splicedNames=names.splice(2,3,"Ajith","Simbu");//starting at 0th index and splice till the last index
//splice(startindex,endindex,values to include in the original array at the start index)
console.log(splicedNames);
for(const name of names){
console.log(name);}
console.log("Slice Method");
const slicedNames=names.slice(1)//start index
for(const slicedName of slicedNames){
    console.log(slicedName);
}
const spl=names.splice(1);
console.log(spl);
