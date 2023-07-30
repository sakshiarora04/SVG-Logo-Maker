const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("should throw error if render() is called", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');  
  });
});

describe('Triangle',()=>{
    test("should throw error if render() is called", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18, 220, 150, 80, 150" fill="blue"/>');

      });
});
describe('Square',()=> {
    test("should throw error if render() is called", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="50" y="20" width="150" height="150" fill:"blue"/>');
      });
    });
