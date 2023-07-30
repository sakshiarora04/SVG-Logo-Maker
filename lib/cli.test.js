const CLI= require('./cli');
describe("colorValidCheck", () => {
    test("should return a message if color is invalid", () => {    
      const colorCheck= new CLI().colorValidCheck('blu');
      expect(colorCheck).toBe('Please enter valid color');
    });
  });
  describe("setText", () => {
    test("should return true if color is valid", () => {    
      const colorCheck= new CLI().colorValidCheck('blue');
      expect(colorCheck).toBeTruthy();
    });
  });

  describe("set", () => {
    test("should return a message if text size is greater than 3", () => {    
      const textSize= new CLI().checkTextSize('SVGG');
      expect(textSize).toBe('Logo text must be less than 3 characters');
    });
  });
  describe("set", () => {
    test("should return true if text size less than or equals to 3", () => {    
      const textSize= new CLI().checkTextSize('SVG');
      expect(textSize).toBeTruthy();
    });
  });