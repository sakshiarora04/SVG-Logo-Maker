
class SVG{
    constructor(){
        this.textHtml='';
        this.shapeHtml='';
      
    }
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${this.shapeHtml}
        ${this.textHtml}
        </svg>`
    }
    setText(text,textColor){
        this.textHtml= `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShape(shapeHtml){
        this.shapeHtml=shapeHtml.render();
    }
}
module.exports = SVG;