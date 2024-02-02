function* generator(){
    function displayName(){
        console.log("Deepak");
    }
    yield displayName();
    function displayAge(age){
        console.log(age);
    }
    yield displayAge(age)
}
const gen=generator();
gen.next()
gen.next(12)