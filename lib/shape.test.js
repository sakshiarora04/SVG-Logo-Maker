const { Shape, Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("should render a circle tag for selected shape", () => {
    const circle = new Circle();
    circle.setColor("blue");
    const circleHtml='<circle cx="150" cy="100" r="80" fill="blue"/>';
    expect(circle.render()).toEqual(circleHtml);  
  });
});

describe('Triangle',()=>{
    test("should render a triangle tag for selected shape", () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        const triangleHtml='<polygon points="150, 18, 220, 150, 80, 150" fill="blue"/>';
        expect(triangle.render()).toEqual(triangleHtml);

      });
});
describe('Square',()=> {
    test("should render a square tag for selected shape", () => {
        const square = new Square();
        square.setColor("blue");
        const squareHtml='<rect x="70" y="30" width="150" height="150" style="fill:blue;"/>';
        expect(square.render()).toEqual(squareHtml);
      });
    });
    describe('Shape',()=> {
      test("should throw error if shape class render() is called", () => {
          const shape = new Shape();         
          const err = new Error('Child class must implement a render() method.');      
          expect(()=>shape.render()).toThrow(err);
        });
      });
  