class Shape {
//    constructor(id,x,y){
//       this.id=id;
//       this.x=x;
//       this.y=y;
//    }
    move1 (x,y) {
        
        console.log(x,y);
    }
    Of(x,y){

    }
}
const obj1=new Shape()
//obj1.move()
obj1.Of()
class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super();
        this.id=id;
        this.x=x;
        this.y=y;
        this.width  = width
        this.height = height
    }
    move(width,height){
        console.log(this.width,this.height);
    }
}
const obj2=new Rectangle(5,6,7,8,9)
obj2.move()
class Circle extends Rectangle {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
    move2(){
        console.log(this.id);
    }
}
const obj3=new Circle(1,2,3,4)
obj3.move2();