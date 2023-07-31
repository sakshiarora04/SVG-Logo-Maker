//shape class
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
//cirle sub class
class Circle extends Shape{  
// render circle tag 
render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
}
}
//triangle sub class
class Triangle extends Shape{
// render triangle tag   
render(){
    return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.shapeColor}"/>`
}

}
//square sub class
class Square extends Shape{
//render rectangle tag
render(){
    return `<rect x="70" y="30" width="150" height="150" style="fill:${this.shapeColor};"/>`
}
}

module.exports={Shape,Circle,Triangle,Square}; 