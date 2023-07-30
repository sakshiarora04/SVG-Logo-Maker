class Shape{
    constructor(){
        this.shapeColor='';
    }
render() {
    throw new Error('Child class must implement a render() method.');
  }
setColor(shapeColor){
    this.shapeColor=shapeColor; 
}
  
}
class Circle extends Shape{   
render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
}
}

class Triangle extends Shape{
  
render(){
    return `<polygon points="150, 18, 220, 150, 80, 150" fill="${this.shapeColor}"/>`
}

}
class Square extends Shape{

render(){
    return `<rect x="70" y="30" width="150" height="150" style="fill:${this.shapeColor};"/>`
}
}

module.exports={Shape,Circle,Triangle,Square}; 