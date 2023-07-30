const CLI= require('./cli');
describe("setText", () => {
    test("should throw error if render() is called", () => {    
      const colorCheck= new CLI().colorValidCheck('blu');
      expect(colorCheck).toEqual('Please enter valid color');
    });
  });
  describe("setText", () => {
    test("should throw error if render() is called", () => {    
      const colorCheck= new CLI().colorValidCheck('blue');
      expect(colorCheck).toBeTruthy();
    });
  });

  describe("set", () => {
    test("should throw error if render() is called", () => {    
      const textSize= new CLI().checkTextSize('SVGG');
      expect(textSize).toEqual('Logo text must be less than 3 characters');
    });
  });
  describe("set", () => {
    test("should throw error if render() is called", () => {    
      const textSize= new CLI().checkTextSize('SVG');
      expect(textSize).toBeTruthy();
    });
  });