class fruit{
    constructor(name,taste){
        this.name=name,
        this.taste=taste
    }
}
class apple extends fruit{
    constructor(name,taste){
        super(name,taste)
    }
}