
class SVG{
    constructor(text,textColor,shapeName){
        this.text=text;
        this.shape=shapeName;
        this.textColor=textColor;
    }
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${this.setShape()}
        ${this.setText()}
        </svg>`
    }
    setText(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    setShape(){
        return `${this.shape}`;
    }
}
module.exports = SVG;