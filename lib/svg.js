class SVG{
    constructor(text,shape){
        this.text=text;
    }
    render(){

    }
    setText(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    setShape(){

    }
}
module.exports = SVG;