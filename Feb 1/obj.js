let person={
    name:"Deepak",
    age:22,
    native:"karur",
    contact:{
        email:"deepak",
        number:78654778,
        school:{
           tenth:"KSV",
            twelth:"KSV",
            college:{
                sem1:"Bit",
                sem2:"bit"
            }
        }
        
    }
}

const {contact:{email}}=person
console.log(email);
const{school:{tenth}}=person.contact
console.log(tenth);
const{college:{sem1}}=person.contact.school
console.log(sem1);
const{name}=person
console.log(name);
// const ao=[1,2,3,4,[5,6,[78,[9]]]]
// const [name, , , ,native]=ao
// console.log(native);

