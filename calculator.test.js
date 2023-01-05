const Calculator = require('./calculator.js');

describe('check operations', () =>{
  const calculator = new Calculator();

  test('valid add', () => {
    expect(calculator.add(24, 100)).toBe(124);
    expect(calculator.add(120, 150)).toBe(270);
  });

  test('valid subtract', () => {
    expect(calculator.subtract(20, 8)).toBe(12);
    expect(calculator.subtract(1, 35)).toBe(-34);
  });

  test('valid divide', () => {
    expect(calculator.divide(42, 8)).toBe(5.25);
    expect(calculator.divide(0, 8)).toBe(0);
    expect(calculator.divide(10, 0)).toBe('Error');
  });

  test('valid multiply', () => {
    expect(calculator.multiply(8, 10)).toBe(80);
    expect(calculator.multiply(3, 25)).toBe(75);
    expect(calculator.multiply(0, 8)).toBe(0);
  });
});