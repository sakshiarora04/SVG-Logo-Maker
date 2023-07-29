class Shape{
constructor(shapeColor){     
        this.shapeColor=shapeColor;  

}
render() {
    throw new Error('Child class must implement a render() method.');
  }
  
}
class Circle extends Shape{
    constructor(shapeColor){
        super(shapeColor);
    }
render(){
    return `
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />    
    `
}
}
class Triangle extends Shape{
    constructor(shapeColor){
        super(shapeColor);
    }
render(){
    return `
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />    
    `
}
}
class Square extends Shape{

}

module.exports={Circle,Triangle,Square}; 