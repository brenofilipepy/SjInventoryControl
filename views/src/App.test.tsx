// Dummy implementation
function sum(a: number, b: number): number {
    return a + b;
}

// Dummy test
describe('sum function', () => {
    it('should add two numbers', () => {
      // Arrange
      const a = 5;
      const b = 10;
  
      // Act
      const result = sum(a, b);
  
      // Assert
      expect(result).toBe(15);
    });
  });