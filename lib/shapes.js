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
    <polygon points="150, 18, 220, 150, 80, 150" fill="${this.shapeColor}"/>    
    `
}
}
class Square extends Shape{
    constructor(shapeColor){
        super(shapeColor);
    }
render(){
    return `
    <rect x="50" y="20" width="150" height="150" fill:"${this.shapeColor}" />   
    `
}
}

module.exports={Circle,Triangle,Square}; 