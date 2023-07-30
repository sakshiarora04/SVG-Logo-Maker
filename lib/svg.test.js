const { Circle, Triangle, Square } = require("./shapes");
const SVG = require("./svg");
describe("setText", () => {
  test("should return a text tag containing text and textcolor", () => {
    const svgLogo = new SVG();
    svgLogo.setText("abc", "blue");
    const textTag =
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">abc</text>';
    expect(svgLogo.textHtml).toEqual(textTag);
  });
});

describe("setShapeCircle", () => {
  test("should return a circle tag containing shape color", () => {
    const svgLogo = new SVG();
    const circle = new Circle();
    circle.setColor("blue");
    svgLogo.setShape(circle);
    const circleTag = '<circle cx="150" cy="100" r="80" fill="blue"/>';
    expect(svgLogo.shapeHtml).toEqual(circleTag);
  });
});
describe("setShapeTriangle", () => {
  test("should return a triangle tag containing shape color", () => {
    const svgLogo = new SVG();
    const triangle = new Triangle();
    triangle.setColor("blue");
    svgLogo.setShape(triangle);
    const triangleTag =
      '<polygon points="150, 18, 220, 150, 80, 150" fill="blue"/>';
    expect(svgLogo.shapeHtml).toEqual(triangleTag);
  });
});
describe("setShapeSquare", () => {
  test("should return a square tag containing shape color", () => {
    const svgLogo = new SVG();
    const square = new Square();
    square.setColor("blue");
    svgLogo.setShape(square);
    const squareTag =
      '<rect x="70" y="30" width="150" height="150" style="fill:blue;"/>';
    expect(svgLogo.shapeHtml).toEqual(squareTag);
  });
});

describe("renderCircleSvg", () => {
  test("should render SVG tag containing circle shape and text tag", () => {
    const svgLogo = new SVG();
    const circle = new Circle();
    circle.setColor("blue");
    svgLogo.setText("abc", "red");
    svgLogo.setShape(circle);
    const circleExpectedHtml = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text>
        </svg>`;
    expect(svgLogo.render()).toEqual(circleExpectedHtml);
  });
});

describe("renderTriangleSvg", () => {
  test("should render SVG tag containing triangle shape and text tag", () => {
    const svgLogo = new SVG();
    svgLogo.setText("abc", "red");
    const triangle = new Triangle();
    triangle.setColor("blue");
    svgLogo.setShape(triangle);
    const triangleExpectedHtml = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18, 220, 150, 80, 150" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text>
        </svg>`;
    expect(svgLogo.render()).toEqual(triangleExpectedHtml);
  });
});

describe("renderSquareSvg", () => {
  test("should render SVG tag containing square shape and text tag", () => {
    const svgLogo = new SVG();
    svgLogo.setText("abc", "red");
    const square = new Square();
    square.setColor("blue");
    svgLogo.setShape(square);
    const squareExpectedHtml = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="30" width="150" height="150" style="fill:blue;"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text>
        </svg>`;
    expect(svgLogo.render()).toEqual(squareExpectedHtml);
  });
});
