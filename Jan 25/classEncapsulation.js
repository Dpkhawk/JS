class Encapsulation{
    #firstWord;
    constructor(firstWord){
        this.#firstWord=firstWord
        function printFirstWord(){
            console.log(firstWord);
        }
        printFirstWord();
    }
}
const Encapsulate=new Encapsulation("Hello World!");
console.log(Encapsulate.firstWord);