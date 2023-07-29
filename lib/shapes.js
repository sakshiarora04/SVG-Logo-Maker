class Shape{
constructor(){

}
render() {
    throw new Error('Child class must implement a render() method.');
  }
}
class Circle extends Shape{
render(){
    return ` <circle cx="150" cy="100" r="80" fill="green" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text`
}
}
class Triangle extends Shape{

}
class Square extends Shape{

}

module.exports={Circle,Triangle,Square}; 