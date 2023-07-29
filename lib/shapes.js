class Shape{
constructor(text,textColor,shapeType,shapeColor){
this.text=text;
this.textColor=textColor;
this.shapeType=shapeType;
this.shapeColor=shapeColor;
}
render() {
    throw new Error('Child class must implement a render() method.');
  }
}
class Circle extends Shape{
    constructor(text,textColor,shapeType,shapeColor){
        super(text,textColor,shapeType,shapeColor);
    }
render(){
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
}
}
class Triangle extends Shape{

}
class Square extends Shape{

}

module.exports={Circle,Triangle,Square}; 