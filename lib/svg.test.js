const { Circle, Triangle, Square } = require("./shapes");
const SVG = require("./svg");
describe("setText", () => {
  test("should throw error if render() is called", () => {
    const svgLogo = new SVG();
    svgLogo.setText("abc", "blue");
    expect(svgLogo.textHtml).toEqual(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">abc</text>'
    );
  });
});

describe("setShape", () => {
  test("should throw error if render() is called", () => {
    const svgLogo = new SVG();
    const circle= new Circle();
   circle.setColor("blue");
    svgLogo.setShape(circle);
    expect(svgLogo.shapeHtml).toEqual(
      '<circle cx="150" cy="100" r="80" fill="blue"/>'
    );
  });
});
describe("setShape", () => {
  test("should throw error if render() is called", () => {
    const svgLogo = new SVG();
    const triangle= new Triangle();
    triangle.setColor("blue");
       svgLogo.setShape(triangle);    
    expect(svgLogo.shapeHtml).toEqual(
      '<polygon points="150, 18, 220, 150, 80, 150" fill="blue"/>'
    );
  });
});
describe("setShape", () => {
  test("should throw error if render() is called", () => {
    const svgLogo = new SVG();
    const square= new Square();
    square.setColor('blue');
       svgLogo.setShape(square)
    expect(svgLogo.shapeHtml).toEqual(
      '<rect x="70" y="30" width="150" height="150" style="fill:blue;"/>'
    );
  });
});

describe("render", () => {
  test("should throw error if render() is called", () => {
    const svgLogo = new SVG();
    const circle=new Circle();
    circle.setColor("blue");
    svgLogo.setText("abc", "red");
    svgLogo.setShape(circle);
    expect(svgLogo.render()).toEqual(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text>
        </svg>`);
  });
});

describe("render", () => {
  test("should throw error if render() is called", () => {
    const svgLogo = new SVG();
    svgLogo.setText("abc", "red");
    const triangle=new Triangle();
    triangle.setColor("blue")
    svgLogo.setShape(triangle);
    expect(svgLogo.render()).toEqual(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18, 220, 150, 80, 150" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text>
        </svg>`);
  });
});



describe("render", () => {
  test("should throw error if render() is called", () => {
    const svgLogo = new SVG();
    svgLogo.setText("abc", "red");
    const square=new Square();
    square.setColor("blue")
    svgLogo.setShape(square);
    expect(svgLogo.render()).toEqual(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="30" width="150" height="150" style="fill:blue;"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text>
        </svg>`);
  });
});
