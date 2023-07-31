
class SVG{
    constructor(){
        this.textHtml='';
        this.shapeHtml='';
      
    }
    //render SVG tag containing text and shape tag
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${this.shapeHtml}
        ${this.textHtml}
        </svg>`
    }
    // passes text tag
    setText(text,textColor){
        this.textHtml= `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    //create shape tag by calling render method of selected shape subclass
    setShape(shape){
        this.shapeHtml=shape.render();
    }
}
module.exports = SVG;