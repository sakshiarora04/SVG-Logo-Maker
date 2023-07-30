const { Shape, Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("should throw error if render() is called", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');  
  });
});

describe('Triangle',()=>{
    test("should throw error if render() is called", () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="150, 18, 220, 150, 80, 150" fill="blue"/>');

      });
});
describe('Square',()=> {
    test("should throw error if render() is called", () => {
        const square = new Square();
        square.setColor("blue");
        expect(square.render()).toEqual('<rect x="70" y="30" width="150" height="150" style="fill:blue;"/>');
      });
    });
    describe('Shape',()=> {
      test("should throw error if render() is called", () => {
          const shape = new Shape();         
          const err = new Error('Child class must implement a render() method.');      
          expect(shape.render).toThrow(err);
        });
      });
  